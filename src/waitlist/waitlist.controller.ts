// src/waitlist/waitlist.controller.ts
import { Controller, Post, Body, UsePipes, ValidationPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { CreateWaitlistDto } from './waitListEmail.dto';

@Controller('waitlist')
export class WaitlistController {
  constructor(private readonly waitlistService: WaitlistService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ transform: true }))
  async addEmail(@Body() createWaitlistDto: CreateWaitlistDto): Promise<{ message: string }> {
    await this.waitlistService.addEmail(createWaitlistDto.email);
    return { message: 'Correo agregado exitosamente.' };
  }
}
