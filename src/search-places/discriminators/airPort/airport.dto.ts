import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class AirportDto extends PlaceDto {
  @ApiProperty({ example: 'airportCode' })
  airportCode: string;

  @ApiProperty({ example: 'transportOptions' })
  transportOptions: Languages[];

  @ApiProperty({ example: 'luggage_storage' })
  luggage_storage: boolean;

  @ApiProperty({ example: 'wifi_available' })
  wifi_available: boolean;

  @ApiProperty({ example: 'facilities' })
  facilities: Languages[];
}
