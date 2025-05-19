// src/whatsapp/whatsapp.service.ts
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import makeWASocket, {
  DisconnectReason,
  AnyMessageContent,
  useMultiFileAuthState,
} from '@whiskeysockets/baileys';
import { promises as fs } from 'fs';
import axios from 'axios';
var qrcode = require('qrcode-terminal');
import * as dotenv from 'dotenv';


@Injectable()
export class WhatsappService implements OnModuleInit {
  private logger = new Logger(WhatsappService.name);
  private sock;
  private authFolder = './auth_folder';

  async onModuleInit() {
    await this.startSocket();
  }

  private async startSocket() {

    dotenv.config();

    this.logger.log('🔄 Iniciando conexión a WhatsApp...');
    const { state, saveCreds } = await useMultiFileAuthState(this.authFolder);

    this.sock = makeWASocket({
      auth: state,
      // ya no uses printQRInTerminal
    });

    // 1) Guardo credenciales
    this.sock.ev.on('creds.update', saveCreds);

    // 2) Manejo de conexión y QR
    this.sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        this.logger.log('📱 Generando código QR:');
        qrcode.generate(qr, { small: true });
      }

      if (connection === 'open') {
        this.logger.log('✅ Conectado a WhatsApp');
      }

      if (connection === 'close') {
        const statusCode = (lastDisconnect?.error as any)?.output?.statusCode;
        this.logger.error(`❌ Desconectado (code: ${statusCode})`);

        // Si fue un error de stream (515) o desconexión no limpia, reconectar
        if (
          statusCode === DisconnectReason.connectionClosed ||
          statusCode === 515
        ) {
          this.logger.warn('🔁 Intentando reconectar en 5s...');
          setTimeout(() => this.startSocket(), 5000);
        }
        if(statusCode === DisconnectReason.loggedOut)
          try {
            fs.rm(this.authFolder, { recursive: true, force: true });
          } catch (err) {
            this.logger.error('Error borrando auth_folder', err);
          }
      }
    });

    // 3) Mensajes entrantes
    this.sock.ev.on('messages.upsert', async ({ messages, type }) => {
      if (type !== 'notify') return;
      const msg = messages[0];
      if (!msg.message || msg.key.fromMe) return;

      const from = msg.key.remoteJid ?? '';
      const text =
        msg.message.conversation ??
        msg.message.extendedTextMessage?.text ??
        '';

      if (!from || !text) return;

      const response = await axios.post(
        ''+process.env.URL_RAG_SERVER,
        {
          "from_": from,
          "body": text,
        }
      )

      await this.sendMessage(from, response.data.reply + 'https://www.google.com');
    });
  }

  /** Método público para enviar mensajes desde un controlador HTTP */
  async sendMessage(to: string, message: string) {
    if (!this.sock) throw new Error('Socket no inicializado');
    await this.sock.sendMessage(to, { text: message });
    this.logger.log(`✉️ Respondido a ${to}: ${message}`);
  }
}
