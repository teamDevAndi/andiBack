import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { UserRegisterService } from './user-register.service';
import { ApiTags } from '@nestjs/swagger';
import { create } from 'domain';
import { UserDetailsDto } from './dto/user-details.dto';
import { RequestPasswordDto } from './dto/password-reset/request-password.dto';

@ApiTags('auth')
@Controller('api/auth')
export class UserRegisterController {
    constructor(private readonly userRegisterService: UserRegisterService) { }
    @Post('register')
    async registerUser(@Body() userDetailsDto: UserDetailsDto) {
        await this.userRegisterService.createUser(userDetailsDto);
        return { message: 'User registered successfully' };
    }

    @Get('users')
    async getUsers() {
        return await this.userRegisterService.getUsers();
    }

    @Patch('request-password-reset')
    async requestPasswordReset(@Body() requestPasswordDto: RequestPasswordDto) {
        await this.userRegisterService.requestPasswordReset(requestPasswordDto);
        return { message: 'If email is registered, a reset code has sent' };
    }
}
