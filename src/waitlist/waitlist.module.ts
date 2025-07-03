// src/waitlist/waitlist.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WaitListEmail, WaitListEmailSchema } from './waitListEmail.schema';
import { WaitlistService } from './waitlist.service';
import { WaitlistController } from './waitlist.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WaitListEmail.name, schema: WaitListEmailSchema }]),
  ],
  providers: [WaitlistService],
  controllers: [WaitlistController],
})
export class WaitlistModule {}
