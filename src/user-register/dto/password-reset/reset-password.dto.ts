import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345', description: 'Código de 5 dígitos' })
  @IsString()
  @Length(5, 5)
  verificationCode: string;

  @ApiProperty({ example: 'NewP4ssw0rd!' })
  @IsString()
  @Length(8, 32, { message: 'La contraseña debe tener entre 8 y 32 caracteres' })
  newPassword: string;

  @ApiProperty({ example: 'NewP4ssw0rd!' })
  @IsString()
  confirmPassword: string;
}
