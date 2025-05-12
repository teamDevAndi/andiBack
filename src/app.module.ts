import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchPlacesModule } from './search-places/search-places.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRegisterModule } from './user-register/user-register.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI ?? ''),

    AuthModule,
    UserRegisterModule,
    SearchPlacesModule,
    UserRegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
