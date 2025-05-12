import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { SearchPlacesService } from './search-places.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PlaceDto } from './dto/place.dto';
import { AirportDto } from './discriminators/airPort/airport.dto';
import { TreekingDto } from './discriminators/treeking/treeking.dto';
import { ChurchDto } from './discriminators/church/church.dto';
import { AtmDto } from './discriminators/atm/atm.dto';
import { BusTerminalDto } from './discriminators/busTerminal/busTerminal.dto';
import { CafeDto } from './discriminators/cafe/cafe.dto';
import { CommissionerDto } from './discriminators/commissioner/commissioner.dto';
import { FoodAreaDto } from './discriminators/foodArea/foodArea.dto';
import { HotelDto } from './discriminators/hotel/hotel.dto';
import { InfoTourDto } from './discriminators/infoTour/infoTour.dto';
import { LakeDto } from './discriminators/lake/lake.dto';
import { LaundriesDto } from './discriminators/laundries/laundries.dto';
import { MallDto } from './discriminators/mall/mall.dto';
import { MarketDto } from './discriminators/market/market.dto';
import { MedicalCenterDto } from './discriminators/medicalCenter/medicalCenter.dto';
import { MonumentsDto } from './discriminators/monuments/monuments.dto';
import { MuseumDto } from './discriminators/museum/museum.dto';
import { ParkDto } from './discriminators/park/park.dto';
import { ParkingDto } from './discriminators/parking/parking.dto';
import { RestaurantDto } from './discriminators/restaurant/restaurant.dto';
import { RuinsDto } from './discriminators/ruins/ruis.dto';
import { SportAreaDto } from './discriminators/sportArea/sportArea.dto';
import { SquareDto } from './discriminators/square/square.dto';
import { SuperMarketDto } from './discriminators/superMarket/superMarket.dto';
import { TheaterDto } from './discriminators/theater/theater.dto';
import { TouristAgencyDto } from './discriminators/touristAgencies/touristAgenciesdto';
import { TransportStopDto } from './discriminators/transportStop/transportStop.dto';
import { UniqueStoreDto } from './discriminators/uniqueStore/uniqueStore.dto';
import { ViewPointsDto } from './discriminators/viewPoints/viewPoints.dto';

@ApiTags('search-places')
@Controller('search-places')
export class SearchPlacesController {
  constructor(private readonly searchPlacesService: SearchPlacesService) {}

  @Get('category/:category')
  async getPlacesByCategory(category: string) {
    return await this.searchPlacesService.findPlacesByCategory(category);
  }

  @Get('get-places')
  async getAllPlaces() {
    return await this.searchPlacesService.findAllPlaces();
  }

  @Get('get-places/:id')
  async getPlaceById(id: string) {
    return await this.searchPlacesService.findPlaceById(id);
  }

  @Post('add-place')
  @ApiOperation({ summary: 'Add a generic place' })
  async addPlace(@Body() dto: PlaceDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Place added successfully' };
  }

  @Post('add-Airport')
  @ApiOperation({ summary: 'Add a new airport' })
  async addAirport(@Body() dto: AirportDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Airport added successfully' };
  }
  @Post('add-Atm')
  @ApiOperation({ summary: 'Add a new atm' })
  async addAtm(@Body() dto: AtmDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Atm added successfully' };
  }
  @Post('add-BusTerminal')
  @ApiOperation({ summary: 'Add a new bus terminal' })
  async addBusTerminal(@Body() dto: BusTerminalDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Bus Terminal added successfully' };
  }

  @Post('add-Cafe')
  @ApiOperation({ summary: 'Add a new cafe' })
  async addCafe(@Body() dto: CafeDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Cafe added successfully' };
  }

  @Post('add-Church')
  @ApiOperation({ summary: 'Add a new church' })
  async addChurch(@Body() dto: ChurchDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Church added successfully' };
  }
  @Post('add-Commissioner')
  @ApiOperation({ summary: 'Add a new commissioner' })
  async addCommissioner(@Body() dto: CommissionerDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Commissioner added successfully' };
  }

  @Post('add-FoodArea')
  @ApiOperation({ summary: 'Add a new food area' })
  async addFoodArea(@Body() dto: FoodAreaDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Food Area added successfully' };
  }

  @Post('add-Hotel')
  @ApiOperation({ summary: 'Add a new hotel' })
  async addHotel(@Body() dto: HotelDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Hotel added successfully' };
  }

  @Post('add-InfoTour')
  @ApiOperation({ summary: 'Add a new info tour' })
  async addInfoTour(@Body() dto: InfoTourDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Info Tour added successfully' };
  }

  @Post('add-Lake')
  @ApiOperation({ summary: 'Add a new lake' })
  async addLake(@Body() dto: LakeDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Lake added successfully' };
  }

  @Post('add-Laundries')
  @ApiOperation({ summary: 'Add a new laundries' })
  async addLaundries(@Body() dto: LaundriesDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Laundries added successfully' };
  }

  @Post('add-Mall')
  @ApiOperation({ summary: 'Add a new mall' })
  async addMall(@Body() dto: MallDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Mall added successfully' };
  }
  @Post('add-Market')
  @ApiOperation({ summary: 'Add a new market' })
  async addMarket(@Body() dto: MarketDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Market added successfully' };
  }

  @Post('add-MedicalCenter')
  @ApiOperation({ summary: 'Add a new medical center' })
  async addMedicalCenter(@Body() dto: MedicalCenterDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Medical Center added successfully' };
  }

  @Post('add-Monument')
  @ApiOperation({ summary: 'Add a new monument' })
  async addMonument(@Body() dto: MonumentsDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Monument added successfully' };
  }

  @Post('add-Museum')
  @ApiOperation({ summary: 'Add a new museum' })
  async addMuseum(@Body() dto: MuseumDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Museum added successfully' };
  }

  @Post('add-Park')
  @ApiOperation({ summary: 'Add a new park' })
  async addPark(@Body() dto: ParkDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Park added successfully' };
  }

  @Post('add-Parking')
  @ApiOperation({ summary: 'Add a new parking' })
  async addParking(@Body() dto: ParkingDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Parking added successfully' };
  }

  @Post('add-Restaurant')
  @ApiOperation({ summary: 'Add a new restaurant' })
  async addRestaurant(@Body() dto: RestaurantDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Restaurant added successfully' };
  }

  @Post('add-Ruins')
  @ApiOperation({ summary: 'Add a new ruins' })
  async addRuins(@Body() dto: RuinsDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Ruins added successfully' };
  }

  @Post('add-SportArea')
  @ApiOperation({ summary: 'Add a new sport area' })
  async addSportArea(@Body() dto: SportAreaDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Sport Area added successfully' };
  }

  @Post('add-Square')
  @ApiOperation({ summary: 'Add a new square' })
  async addSquare(@Body() dto: SquareDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Square added successfully' };
  }

  @Post('add-SuperMarket')
  @ApiOperation({ summary: 'Add a new supermarket' })
  async addSuperMarket(@Body() dto: SuperMarketDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'SuperMarket added successfully' };
  }

  @Post('add-Theater')
  @ApiOperation({ summary: 'Add a new theater' })
  async addTheater(@Body() dto: TheaterDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Theater added successfully' };
  }

  @Post('add-TouristAgency')
  @ApiOperation({ summary: 'Add a new tourist agency' })
  async addTouristAgency(@Body() dto: TouristAgencyDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Tourist Agency added successfully' };
  }

  @Post('add-TransportStop')
  @ApiOperation({ summary: 'Add a new transport stop' })
  async addTransportStop(@Body() dto: TransportStopDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Transport Stop added successfully' };
  }
  @Post('add-Treeking')
  @ApiOperation({ summary: 'Add a new Treeking' })
  async addTreeking(@Body() dto: TreekingDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Treeking added successfully' };
  }
  @Post('add-UniqueStore')
  @ApiOperation({ summary: 'Add a new unique store' })
  async addUniqueStore(@Body() dto: UniqueStoreDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Unique Store added successfully' };
  }

  @Post('add-ViewPoint')
  @ApiOperation({ summary: 'Add a new view point' })
  async addViewPoint(@Body() dto: ViewPointsDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'ViewPoint added successfully' };
  }

  @Put('update-place/:id')
  async updatePlace(@Body() placeDto: PlaceDto, id: string) {
    await this.searchPlacesService.updatePlace(id, placeDto);
    return { message: 'Place updated successfully' };
  }

  @Delete('delete-place/:id')
  async deletePlace(id: string) {
    await this.searchPlacesService.deletePlace(id);
    return { message: 'Place deleted successfully' };
  }
}
