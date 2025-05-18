import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceInformationService } from './placeinformations.service';
import { PlaceInformationController } from './placeinformations.controller';
import { PlaceInformation, PlaceInformationSchema } from './schemas/placeinformation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlaceInformation.name, schema: PlaceInformationSchema }
    ])
  ],
  controllers: [PlaceInformationController],
  providers: [PlaceInformationService],
  exports: [PlaceInformationService],
})
export class PlaceInformationModule {}
