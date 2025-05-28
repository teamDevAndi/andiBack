import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserDetailsSchema } from './schemas/user-details.schema';
import { UsersSchema } from './schemas/users.schema';

import { UserRegisterController } from './user-register.controller';
import { UserRegisterService } from './user-register.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserDetails', schema: UserDetailsSchema },
    ]),
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  controllers: [UserRegisterController],
  providers: [UserRegisterService],
})
export class UserRegisterModule {}
