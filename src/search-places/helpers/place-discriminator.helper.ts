// Imports de todos los DTOs
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

export type PlaceCategory =
  | 'Airport'
  | 'Atm'
  | 'BusTerminal'
  | 'Cafe'
  | 'Church'
  | 'Commissioner'
  | 'FoodArea'
  | 'Hotel'
  | 'Infotour'
  | 'Lake'
  | 'Laundries'
  | 'Mall'
  | 'Market'
  | 'MedicalCenter'
  | 'Monuments'
  | 'Museum'
  | 'Park'
  | 'Parking'
  | 'Restaurant'
  | 'Ruins'
  | 'SportArea'
  | 'Square'
  | 'SuperMarket'
  | 'Theater'
  | 'TouristAgencies'
  | 'TransportStop'
  | 'Treeking'
  | 'UniqueStore'
  | 'ViewPoints';

// Mapa con tipos seguros
const categoryDtoMap: Record<PlaceCategory, new () => any> = {
  Airport: AirportDto,
  Atm: AtmDto,
  BusTerminal: BusTerminalDto,
  Cafe: CafeDto,
  Church: ChurchDto,
  Commissioner: CommissionerDto,
  FoodArea: FoodAreaDto,
  Hotel: HotelDto,
  Infotour: InfoTourDto,
  Lake: LakeDto,
  Laundries: LaundriesDto,
  Mall: MallDto,
  Market: MarketDto,
  MedicalCenter: MedicalCenterDto,
  Monuments: MonumentsDto,
  Museum: MuseumDto,
  Park: ParkDto,
  Parking: ParkingDto,
  Restaurant: RestaurantDto,
  Ruins: RuinsDto,
  SportArea: SportAreaDto,
  Square: SquareDto,
  SuperMarket: SuperMarketDto,
  Theater: TheaterDto,
  TouristAgencies: TouristAgencyDto,
  TransportStop: TransportStopDto,
  Treeking: TreekingDto,
  UniqueStore: UniqueStoreDto,
  ViewPoints: ViewPointsDto,
};

export function getDtoByCategory(category: string) {
  if (!(category in categoryDtoMap)) {
    throw new Error(`No DTO defined for category "${category}"`);
  }
  return categoryDtoMap[category as PlaceCategory];
}
