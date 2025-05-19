import { Controller, Post, Body } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsapp: WhatsappService) {}

  @Post('send')
  async send(
    @Body() body: { to: string; message: string },
  ): Promise<{ status: string }> {
    await this.whatsapp.sendMessage(body.to, body.message);
    return { status: 'sent' };
  }
}
