// src/waitlist-numbers/waitlist-numbers.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WaitlistNumbers, WaitlistNumbersSchema } from './waitlist-numbers.schema';
import { WaitlistNumbersService } from './waitlist-numbers.service';
import { WaitlistNumbersController } from './waitlist-numbers.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WaitlistNumbers.name, schema: WaitlistNumbersSchema },
    ]),
  ],
  providers: [WaitlistNumbersService],
  controllers: [WaitlistNumbersController],
})
export class WaitlistNumbersModule {}
