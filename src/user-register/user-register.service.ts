import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserDetailsDto } from './dto/user-details.dto';
import { UserDetails } from './schemas/user-details.schema';
import { Users } from './schemas/users.schema';
import { sendVerificationEmail } from './helpers/sendVerificationCode';
import { encryptPassword } from './helpers/encryptPassword';
import {  generateVerificationCode } from './utils/verificationCodeGenerator';
import { expirationTime } from './utils/expirationTimeGenerator';
import { emailExists } from './helpers/verificationEmailExists';
import { RequestPasswordDto } from './dto/password-reset/request-password.dto';
import { sendResetCode } from './helpers/sendResetCode';

@Injectable()
export class UserRegisterService {
    constructor(
        @InjectModel(UserDetails.name) private userDetailsModel: Model<UserDetails>,
        @InjectModel(Users.name) private usersModel: Model<Users>,
    ) { }

    async createUser(userDetailsDto: UserDetailsDto) {
        if (await emailExists(userDetailsDto.email, this.usersModel)) {
            throw new BadRequestException('Email already registered');
        }

        const hashedPassword = await encryptPassword(userDetailsDto.password);
        const verificationCode = generateVerificationCode();
        const expirationDate = expirationTime(10);

        const users = new  this.usersModel({
            email: userDetailsDto.email,
            password: hashedPassword,
        });

        const userDetails = new this.userDetailsModel({
            user_Id: users._id,
            nationality: userDetailsDto.nationality,
            age: userDetailsDto.age,
            verificationCode: verificationCode,
            verificationCodeExpiresAt: expirationDate,
            verificationStatus: false,
            resetCode: null,
            resetCodeExpiresAt: null,
            resetStatus: false,
        });

        await users.save();
        await userDetails.save();

        await sendVerificationEmail(userDetailsDto.email, verificationCode);

        return { message: 'Register successfully. Check your email.' };
    }

    async getUsers() {
        const users = await this.usersModel.find().exec();
        const userDetails = await this.userDetailsModel.find().exec();

        return { users, userDetails };
    }

    async deleteUser(userId: string) {
        const user = await this.usersModel.findById(userId);

        if (!user) {
            throw new BadRequestException('User not found');
        }

        await this.userDetailsModel.deleteOne({ user_Id: userId });
    }

    async requestPasswordReset(requestPasswordDto: RequestPasswordDto) {        
        const user = await emailExists(requestPasswordDto.email, this.usersModel);

        if (!user.exists) {
            throw new BadRequestException('Email not registered');
        }

        const userDetails = await this.userDetailsModel.findOne({ user_Id: user.userData._id });

        if (!userDetails) {
            throw new BadRequestException('User details not found');
        }

        const resetCode = generateVerificationCode();
        const resetCodeExpiresAt = expirationTime(10);

        userDetails.resetCode = resetCode;
        userDetails.resetCodeExpiresAt = resetCodeExpiresAt;
        userDetails.resetStatus = false;

        await userDetails.save();

        await sendResetCode(requestPasswordDto.email, resetCode);

    
        return { message: 'Password reset code sent to your email.' };
    }
}
