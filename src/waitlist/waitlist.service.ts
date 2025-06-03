// src/waitlist/waitlist.service.ts
import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WaitListEmail } from './waitListEmail.schema';

@Injectable()
export class WaitlistService {
  constructor(
    @InjectModel(WaitListEmail.name) private waitlistModel: Model<WaitListEmail>,
  ) {}

  async addEmail(email: string): Promise<void> {
    try {
      const existing = await this.waitlistModel.findOne({ email });
      if (existing) {
        throw new ConflictException('El correo ya está registrado.');
      }

      const newEntry = new this.waitlistModel({ email });
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
