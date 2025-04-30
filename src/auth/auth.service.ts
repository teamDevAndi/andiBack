import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { VerifyEmailDto } from './dto/verify-email.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async verifyEmailCode(dto: VerifyEmailDto): Promise<string> {
    const user = await this.userModel.findOne({ email: dto.email });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    if (user.verificationStatus) {
      throw new BadRequestException('El correo ya está verificado');
    }

    if (user.verificationCode !== dto.verificationCode) {
      throw new BadRequestException('Código incorrecto');
    }

    if (user.codeExpiresAt && user.codeExpiresAt < new Date()) {
      throw new BadRequestException('El código ha expirado');
    }

    user.verificationStatus = true;
    user.verificationCode = null
    user.codeExpiresAt = null;

    await user.save();

    return 'Correo verificado exitosamente';
  }
}
