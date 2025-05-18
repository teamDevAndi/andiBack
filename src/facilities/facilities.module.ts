import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FacilitySchema } from './schemas/facility.schema';
import { FacilitiesController } from './facilities.controller';
import { FacilitiesService } from './facilities.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Facility', schema: FacilitySchema }])],
  controllers: [FacilitiesController],
  providers: [FacilitiesService],
  exports: [FacilitiesService],
})
export class FacilitiesModule {}
