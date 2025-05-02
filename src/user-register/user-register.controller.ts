import { Body, Controller, Post } from '@nestjs/common';
import { UserRegisterService } from './user-register.service';
import { ApiTags } from '@nestjs/swagger';
import { create } from 'domain';
import { UserRegisterDto } from './dto/user-register.dto';

@ApiTags('auth')
@Controller('api/auth')
export class UserRegisterController {
    constructor(private readonly userRegisterService: UserRegisterService) { }
    @Post('register')
    async registerUser(@Body() userRegisterDto: UserRegisterDto) {
        await this.userRegisterService.createUser(userRegisterDto);
        return { message: 'User registered successfully' };
    }
}
