import { IsNotEmpty, Matches } from 'class-validator';

export class CreateWaitlistNumberDto {
  @IsNotEmpty({ message: 'El número no puede estar vacío.' })
  @Matches(
    /^[0-9]{8}$/,  // Ajusta la expresión según tus necesidades
    { message: 'El número no tiene un formato válido (8 dígitos).' }
  )
  number: string;
}
