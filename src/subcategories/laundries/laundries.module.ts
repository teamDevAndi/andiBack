import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Laundry, LaundrySchema } from './schemas/laundry.schema';
import { LaundriesService } from './laundries.service';
import { LaundriesController } from './laundries.controller';
import { ServiceType, ServiceTypeSchema } from './schemas/service_type.schema';
import { PaymentMethod, PaymentMethodSchema } from 'src/common/schemas/payment_methods.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Laundry.name, schema: LaundrySchema },
      { name: ServiceType.name, schema: ServiceTypeSchema },
      { name: PaymentMethod.name, schema: PaymentMethodSchema },
      { name: Place.name, schema: PlaceSchema },

    ])
  ],
  controllers: [LaundriesController],
  providers: [LaundriesService],
})
export class LaundriesModule {}
