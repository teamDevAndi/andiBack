import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async sendVerificationCode(email: string, code: string): Promise<void> {
    // En producción: enviar con nodemailer, SendGrid, Mailgun, etc.
    console.log(`Enviando código ${code} a ${email}`);
  }
}
