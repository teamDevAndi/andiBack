import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarketsController } from './markets.controller';
import { MarketsService } from './markets.service';
import { Market, MarketSchema } from './schemas/market.schema';
import { MarketType, MarketTypeSchema } from './schemas/market_types.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Market.name, schema: MarketSchema },
    { name: MarketType.name, schema: MarketTypeSchema },
    { name: Place.name, schema: PlaceSchema },

  ])],
  controllers: [MarketsController],
  providers: [MarketsService],
})
export class MarketsModule {}
