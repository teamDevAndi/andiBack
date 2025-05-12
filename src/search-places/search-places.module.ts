import { Module } from '@nestjs/common';
import { SearchPlacesService } from './search-places.service';
import { SearchPlacesController } from './search-places.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Place, PlaceSchema } from './schemas/place.schema';
import { PlaceLocationSchema } from './schemas/place-location.schema';

import { TreekingSchema } from './discriminators/treeking/treeking.schema';
import { ViewPointsSchema } from './discriminators/viewPoints/viewPoint.schema';
import { ParkSchema } from './discriminators/park/park.schema';
import { LakeSchema } from './discriminators/lake/lake.schema';
import { SportAreaSchema } from './discriminators/sportArea/sportArea.schema';
import { SquareSchema } from './discriminators/square/square.schema';
import { RestaurantSchema } from './discriminators/restaurant/restaurant.schema';
import { CafeSchema } from './discriminators/cafe/cafe.schema';
import { FoodAreaSchema } from './discriminators/foodArea/foodArea.schema';
import { TheaterSchema } from './discriminators/theater/theater.schema';
import { MuseumSchema } from './discriminators/museum/museum.schema';
import { RuinsSchema } from './discriminators/ruins/ruins.schema';
import { MonumentsSchema } from './discriminators/monuments/monuments.schema';
import { ChurchSchema } from './discriminators/church/church.schema';
import { MallSchema } from './discriminators/mall/mall.schema';
import { UniqueStoreSchema } from './discriminators/uniqueStore/uniqueStore.schema';
import { SuperMarketSchema } from './discriminators/superMarket/superMarket.schema';
import { MarketSchema } from './discriminators/market/market.schema';
import { MedicalCenterSchema } from './discriminators/medicalCenter/medicalCenter.schema';
import { CommissionerSchema } from './discriminators/commissioner/commissioner.schema';
import { HotelSchema } from './discriminators/hotel/hotel.schema';
import { InfoTourSchema } from './discriminators/infoTour/infoTour.schema';
import { TouristAgencySchema } from './discriminators/touristAgencies/touristAgencies.schema';
import { LaundriesSchema } from './discriminators/laundries/laundries.schema';
import { AtmSchema } from './discriminators/atm/atm.schema';
import { ParkingSchema } from './discriminators/parking/parking.schema';
import { TransportStopSchema } from './discriminators/transportStop/transportStop.schema';
import { BusTerminalSchema } from './discriminators/busTerminal/busterminal.schema';
import { AirportSchema } from './discriminators/airPort/airPort.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PlaceLocation', schema: PlaceLocationSchema },
    ]),
    MongooseModule.forFeatureAsync([
      {
        name: Place.name,
        useFactory: () => {
          const schema = PlaceSchema;

          schema.discriminator('Trekking', TreekingSchema);
          schema.discriminator('ViewPoints', ViewPointsSchema);
          schema.discriminator('Park', ParkSchema);
          schema.discriminator('Lake', LakeSchema);
          schema.discriminator('SportArea', SportAreaSchema);
          schema.discriminator('Square', SquareSchema);
          schema.discriminator('Restaurant', RestaurantSchema);
          schema.discriminator('Cafe', CafeSchema);
          schema.discriminator('FoodArea', FoodAreaSchema);
          schema.discriminator('Theater', TheaterSchema);
          schema.discriminator('Museum', MuseumSchema);
          schema.discriminator('Ruins', RuinsSchema);
          schema.discriminator('Monuments', MonumentsSchema);
          schema.discriminator('Church', ChurchSchema);
          schema.discriminator('Mall', MallSchema);
          schema.discriminator('UniqueStore', UniqueStoreSchema);
          schema.discriminator('SuperMarket', SuperMarketSchema);
          schema.discriminator('Market', MarketSchema);
          schema.discriminator('MedicalCenter', MedicalCenterSchema);
          schema.discriminator('Commissioner', CommissionerSchema);
          schema.discriminator('Hotel', HotelSchema);
          schema.discriminator('InfoTour', InfoTourSchema);
          schema.discriminator('TouristAgencies', TouristAgencySchema);
          schema.discriminator('Laundries', LaundriesSchema);
          schema.discriminator('Atm', AtmSchema);
          schema.discriminator('Parking', ParkingSchema);
          schema.discriminator('TransportStop', TransportStopSchema);
          schema.discriminator('BusTerminal', BusTerminalSchema);
          schema.discriminator('AirPort', AirportSchema);

          return schema;
        },
      },
    ]),
  ],
  providers: [SearchPlacesService],
  controllers: [SearchPlacesController],
})
export class SearchPlacesModule {}
