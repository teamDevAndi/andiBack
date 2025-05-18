import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Parking, ParkingSchema } from './schemas/parking.schema';
import { ParkingsService } from './parkings.service';
import { ParkingsController } from './parkings.controller';
import { SecurityFeature, SecurityFeatureSchema } from './schemas/security_features.schema';
import { VehicleType, VehicleTypeSchema } from './schemas/vehicle_types.schema';
import { ParkingType, ParkingTypeSchema } from './schemas/parking_type.schema';
import { PaymentMethod, PaymentMethodSchema } from 'src/common/schemas/payment_methods.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Parking.name, schema: ParkingSchema },
      { name: SecurityFeature.name, schema: SecurityFeatureSchema },
      { name: VehicleType.name, schema: VehicleTypeSchema },
      { name: ParkingType.name, schema: ParkingTypeSchema },
      { name: PaymentMethod.name, schema: PaymentMethodSchema },
      { name: Place.name, schema: PlaceSchema },

    ])
  ],
  controllers: [ParkingsController],
  providers: [ParkingsService],
})
export class ParkingsModule {}
