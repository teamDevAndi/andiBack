import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceRequest, PlaceRequestSchema } from './schema/placerequest.schema';
import { PlaceRequestController } from './placerecuest.controller';
import { PlaceRequestService } from './placerequest.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlaceRequest.name, schema: PlaceRequestSchema },
    ]),
  ],
  controllers: [PlaceRequestController],
  providers: [PlaceRequestService],
})
export class PlaceRequestModule {}