import { IsNotEmpty, Matches } from 'class-validator';

export class CreateWaitlistNumberDto {
  @IsNotEmpty({ message: 'El número no puede estar vacío.' })
  @Matches(
    /^\+591\d{8}$/,  // Ajusta la expresión según tus necesidades
    { message: 'El número no tiene un formato válido (12 dígitos).' }
  )
  number: string;
}
