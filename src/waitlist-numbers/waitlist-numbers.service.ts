// src/waitlist-numbers/waitlist-numbers.service.ts
import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WaitlistNumbers } from './waitlist-numbers.schema';

@Injectable()
export class WaitlistNumbersService {
  constructor(
    @InjectModel(WaitlistNumbers.name)
    private waitlistNumbersModel: Model<WaitlistNumbers>,
  ) {}

  async addNumber(number: string): Promise<void> {
    try {
      const existing = await this.waitlistNumbersModel.findOne({ number });
      if (existing) {
        throw new ConflictException('El número ya está registrado.');
      }

      const newEntry = new this.waitlistNumbersModel({ number });
      await newEntry.save();
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException('Ocurrió un error inesperado.');
    }
  }
}
