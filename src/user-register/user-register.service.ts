import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserDetailsDto } from './dto/user-details.dto';
import { UserDetails } from './schemas/user-details.schema';
import { Users } from './schemas/users.schema';
import { sendVerificationEmail } from 'src/helpers/sendVerificationCode';
import { encryptPassword } from 'src/helpers/encryptPassword';

@Injectable()
export class UserRegisterService {
  constructor(
    @InjectModel(UserDetails.name) private userDetailsModel: Model<UserDetails>,
    @InjectModel(Users.name) private usersModel: Model<Users>,
  ) {}

  async createUser(userDetailsDto: UserDetailsDto) {
    const existingUser = await this.usersModel.findOne({
      email: userDetailsDto.email,
    });
    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }

    const hashedPassword = await encryptPassword(userDetailsDto.password);
    const verificationCode = Math.floor(
      10000 + Math.random() * 90000,
    ).toString();
    const expirationDate = new Date(Date.now() + 10 * 60 * 1000);

    const users = new this.usersModel({
      email: userDetailsDto.email,
      password: hashedPassword,
    });

    const userDetails = new this.userDetailsModel({
      user_Id: users.id,
      nationality: userDetailsDto.nationality,
      age: userDetailsDto.age,
      verificationCode,
      verificationCodeExpiresAt: expirationDate,
      verificationStatus: false,
    });

    await users.save();
    await userDetails.save();

    await sendVerificationEmail(userDetailsDto.email, verificationCode);

    return { message: 'Register successfully. Check your email.' };
  }
}
