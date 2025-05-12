import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class InfoTourDto extends PlaceDto {
  @ApiProperty({ example: ['language_support'] })
  language_support: Languages[];

  @ApiProperty({ example: 'Phone_Number' })
  Phone_Number: string;

  @ApiProperty({ example: 'souvenirs_available' })
  souvenirs_available: boolean;

  @ApiProperty({ example: 'wifi_available' })
  wifi_available: boolean;

  @ApiProperty({ example: 'parking_available' })
  parking_available: boolean;

  @ApiProperty({ example: 'charging_stations' })
  charging_stations: boolean;
}
