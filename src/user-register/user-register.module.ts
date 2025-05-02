import { Module } from '@nestjs/common';
import { UserRegisterController } from './user-register.controller';
import { UserRegisterService } from './user-register.service';
import { UserDataSchema } from './schemas/user-register.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'UserData', schema: UserDataSchema}])
  ],
  controllers: [UserRegisterController],
  providers: [UserRegisterService]
})
export class UserRegisterModule {}
