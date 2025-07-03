import { Controller, Post, Body, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { WaitlistNumbersService } from './waitlist-numbers.service';
import { CreateWaitlistNumberDto } from './create-waitlist-number.dto';

@Controller('waitlist-numbers')
export class WaitlistNumbersController {
  constructor(private readonly waitlistNumbersService: WaitlistNumbersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ transform: true }))
  async addNumber(@Body() createWaitlistNumberDto: CreateWaitlistNumberDto): Promise<{ message: string }> {
    await this.waitlistNumbersService.addNumber(createWaitlistNumberDto.number);
    return { message: 'Número agregado exitosamente.' };
  }
}
