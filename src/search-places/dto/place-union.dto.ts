import { AirportDto } from '../discriminators/airPort/airport.dto';
import { TreekingDto } from '../discriminators/treeking/treeking.dto';
import { ChurchDto } from '../discriminators/church/church.dto';
import { AtmDto } from '../discriminators/atm/atm.dto';
import { BusTerminalDto } from '../discriminators/busTerminal/busTerminal.dto';
import { CafeDto } from '../discriminators/cafe/cafe.dto';
import { CommissionerDto } from '../discriminators/commissioner/commissioner.dto';
import { FoodAreaDto } from '../discriminators/foodArea/foodArea.dto';
import { HotelDto } from '../discriminators/hotel/hotel.dto';
import { InfoTourDto } from '../discriminators/infoTour/infoTour.dto';
import { LakeDto } from '../discriminators/lake/lake.dto';
import { LaundriesDto } from '../discriminators/laundries/laundries.dto';
import { MallDto } from '../discriminators/mall/mall.dto';
import { MarketDto } from '../discriminators/market/market.dto';
import { MedicalCenterDto } from '../discriminators/medicalCenter/medicalCenter.dto';
import { MonumentsDto } from '../discriminators/monuments/monuments.dto';
import { MuseumDto } from '../discriminators/museum/museum.dto';
import { ParkDto } from '../discriminators/park/park.dto';
import { ParkingDto } from '../discriminators/parking/parking.dto';
import { RestaurantDto } from '../discriminators/restaurant/restaurant.dto';
import { RuinsDto } from '../discriminators/ruins/ruis.dto';
import { SportAreaDto } from '../discriminators/sportArea/sportArea.dto';
import { SquareDto } from '../discriminators/square/square.dto';
import { SuperMarketDto } from '../discriminators/superMarket/superMarket.dto';
import { TheaterDto } from '../discriminators/theater/theater.dto';
import { TouristAgencyDto } from '../discriminators/touristAgencies/touristAgenciesdto';
import { TransportStopDto } from '../discriminators/transportStop/transportStop.dto';
import { UniqueStoreDto } from '../discriminators/uniqueStore/uniqueStore.dto';
import { ViewPointsDto } from '../discriminators/viewPoints/viewPoints.dto';

export type PlaceUnionDto =
  | AirportDto
  | TreekingDto
  | ChurchDto
  | AtmDto
  | BusTerminalDto
  | CafeDto
  | CommissionerDto
  | FoodAreaDto
  | HotelDto
  | InfoTourDto
  | LakeDto
  | LaundriesDto
  | MallDto
  | MarketDto
  | MedicalCenterDto
  | MonumentsDto
  | MuseumDto
  | ParkDto
  | ParkingDto
  | RestaurantDto
  | RuinsDto
  | SportAreaDto
  | SquareDto
  | SuperMarketDto
  | TheaterDto
  | TouristAgencyDto
  | TransportStopDto
  | UniqueStoreDto
  | ViewPointsDto;
