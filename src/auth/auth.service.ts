import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { LoginDto } from './dto/login.dto';
import { Users } from 'src/user-register/schemas/users.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<Users>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    try {
      const user = await this.userModel.findOne({ email: loginDto.email });
      if (!user) throw new BadRequestException('Email not found');

      const isMatch = await bcrypt.compare(loginDto.password, user.password);
      if (!isMatch) throw new BadRequestException('Invalid credentials');

      const payload = { sub: user._id, email: user.email };
      const accessToken = this.jwtService.sign(payload);

      return { accessToken };
    } catch (err) {
      console.error('LOGIN ERROR:', err);
      throw new InternalServerErrorException();
    }
  }
}
