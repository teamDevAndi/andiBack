import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SupermarketsController } from './supermarkets.controller';
import { SupermarketsService } from './supermarkets.service';
import { Supermarket, SupermarketSchema } from './schemas/supermarket.schema';
import { ProductCategory, ProductCategorySchema } from './schemas/product_categories.schema';
import { PaymentMethod, PaymentMethodSchema } from 'src/common/schemas/payment_methods.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Supermarket.name, schema: SupermarketSchema },
    { name: ProductCategory.name, schema: ProductCategorySchema },
    { name: PaymentMethod.name, schema: PaymentMethodSchema },
    { name: Place.name, schema: PlaceSchema },

  ])],
  controllers: [SupermarketsController],
  providers: [SupermarketsService],
})
export class SupermarketsModule {}
