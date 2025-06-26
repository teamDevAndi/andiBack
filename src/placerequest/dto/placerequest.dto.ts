import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class CreatePlaceRequestDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  name: string;

  @IsNotEmpty({ message: 'El nombre del lugar es obligatorio.' })
  placeName: string;

  @IsNotEmpty({ message: 'La ciudad o localidad es obligatoria.' })
  location: string;

  @IsEmail({}, { message: 'Correo inválido.' })
  email: string;

  @Matches(/^\+591\d{7,8}$/, {
    message:'Número de WhatsApp inválido. Debe comenzar con +591 y tener 7 u 8 dígitos.',
  })
  whatsapp: string;

  @IsNotEmpty({ message: 'La descripción es obligatoria.' })
  description: string;
}
