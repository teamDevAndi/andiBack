import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserData } from './schemas/user-register.schema';
import { Model } from 'mongoose';
import { UserRegisterDto } from './dto/user-register.dto';

@Injectable()
export class UserRegisterService {
    constructor(
        @InjectModel(UserData.name) private userModel: Model<UserData>
    ) { }

    async encryptPassword(password: string) {
        const bcrypt = require('bcrypt');
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;

    }

    async sendVerificationEmail(email: string, code: string) {
        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'andi@gmail.com', // andi email
                pass: 'password', // andi app generated password
            },
        });

        await transporter.sendMail({
            from: '"Verificación" <no-reply@tuapp.com>',
            to: email,
            subject: 'Código de verificación',
            html: `<p>Tu código es: <b>${code}</b>. Expira en 10 minutos.</p>`,
        });
    }

    async createUser(userRegisterDto: UserRegisterDto) {
        const existingUser = await this.userModel.findOne({ email: userRegisterDto.email });
        if (existingUser) {
            throw new BadRequestException('Email already registered');
        }

        const hashedPassword = await this.encryptPassword(userRegisterDto.password);
        const verificationCode = Math.floor(10000 + Math.random() * 90000).toString();
        const expirationDate = new Date(Date.now() + 10 * 60 * 1000);

        const user = new this.userModel({
            email: userRegisterDto.email,
            password: hashedPassword,
            nationality: userRegisterDto.nationality,
            age: userRegisterDto.age,
            verificationCode,
            verificationCodeExpiresAt: expirationDate,
            verificationStatus: false,
        });

        await user.save();
        await this.sendVerificationEmail(userRegisterDto.email, verificationCode);

        return { message: 'Register successfully. Check your email.' };
    }
}
