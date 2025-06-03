// src/waitlist/dto/create-waitlist.dto.ts
import { IsNotEmpty, Matches } from 'class-validator';

export class CreateWaitlistDto {
  @IsNotEmpty({ message: 'El email no puede estar vacío.' })
  @Matches(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    { message: 'El email no tiene un formato válido.' }
  )
  email: string;
}
