import { Body, Controller, Post } from '@nestjs/common';
import { UserRegisterService } from './user-register.service';
import { ApiTags } from '@nestjs/swagger';
import { create } from 'domain';
import { UserDetailsDto } from './dto/user-details.dto';

@ApiTags('auth')
@Controller('api/auth')
export class UserRegisterController {
  constructor(private readonly userRegisterService: UserRegisterService) {}
  @Post('register')
  async registerUser(@Body() userDetailsDto: UserDetailsDto) {
    await this.userRegisterService.createUser(userDetailsDto);
    return { message: 'User registered successfully' };
  }
}
