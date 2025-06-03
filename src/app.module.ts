import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './places/places.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRegisterModule } from './user-register/user-register.module';
import { AuthModule } from './auth/auth.module';
import { ChurchesModule } from './subcategories/churches/churches.module';
import { TrekkingsModule } from './subcategories/trekkings/trekkings.module';
import { ViewPointsModule } from './subcategories/viewpoints/viewpoints.module';
import { ParksModule } from './subcategories/parks/parks.module';
import { LakesModule } from './subcategories/lakes/lakes.module';
import { SportAreasModule } from './subcategories/sportareas/sportareas.module';
import { SquaresModule } from './subcategories/squares/squares.module';
import { RestaurantsModule } from './subcategories/restaurants/restaurants.module';
import { CafesModule } from './subcategories/cafes/cafes.module';
import { FoodAreasModule } from './subcategories/foodareas/foodareas.module';
import { TheatersModule } from './subcategories/theaters/theaters.module';
import { MuseumsModule } from './subcategories/museums/museums.module';
import { RuinsModule } from './subcategories/ruins/ruins.module';
import { MonumentsModule } from './subcategories/monuments/monuments.module';
import { MallsModule } from './subcategories/malls/malls.module';
import { UniqueStoresModule } from './subcategories/uniquestores/uniquestores.module';
import { SupermarketsModule } from './subcategories/supermarkets/supermarkets.module';
import { MarketsModule } from './subcategories/market/markets.module';
import { MedicalCentersModule } from './subcategories/medicalcenters/medicalcenters.module';
import { CommissionersModule } from './subcategories/commissioners/commissioners.module';
import { HotelsModule } from './subcategories/hotels/hotels.module';
import { InfotoursModule } from './subcategories/infotours/infotours.module';
import { TouristAgenciesModule } from './subcategories/touristagencies/touristagencies.module';
import { LaundriesModule } from './subcategories/laundries/laundries.module';
import { AtmsModule } from './subcategories/atms/atms.module';
import { ParkingsModule } from './subcategories/parkings/parkings.module';
import { TransportStopsModule } from './subcategories/transportstops/transportstops.module';
import { BusTerminalsModule } from './subcategories/busterminals/busterminals.module';
import { AirportsModule } from './subcategories/airports/airports.module';
import { PlaceLocationModule } from './placelocations/placelocations.module';
import { PlaceInformationModule } from './placeinformations/placeinformations.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { WaitlistModule } from './waitlist/waitlist.module';
import { WaitlistNumbersModule } from './waitlist-numbers/waitlist-numbers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI ?? ''),
    AuthModule,
    UserRegisterModule,
    PlacesModule,
    PlaceLocationModule,
    PlaceInformationModule,
    ChurchesModule,
    TrekkingsModule,
    ViewPointsModule,
    ParksModule,
    LakesModule,
    SportAreasModule,
    SquaresModule,
    RestaurantsModule,
    CafesModule,
    FoodAreasModule,
    TheatersModule,
    MuseumsModule,
    RuinsModule,
    MonumentsModule,
    MallsModule,
    UniqueStoresModule,
    SupermarketsModule,
    MarketsModule,
    MedicalCentersModule,
    CommissionersModule,
    HotelsModule,
    InfotoursModule,
    TouristAgenciesModule,
    LaundriesModule,
    AtmsModule,
    ParkingsModule,
    TransportStopsModule,
    BusTerminalsModule,
    AirportsModule,
    WhatsappModule,
    WaitlistModule,
    WaitlistNumbersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
