import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from 'src/search-places/dto/place.dto';

export class BusTerminalDto extends PlaceDto {
  @ApiProperty({ example: true })
  ticket_sales: boolean;

  @ApiProperty({ example: 'facilities' })
  facilities: Languages[];

  @ApiProperty({ example: 'parking_available' })
  parking_available: boolean;

  @ApiProperty({ example: 'wifi_available' })
  wifi_available: boolean;

  @ApiProperty({ example: 'luggage_storage' })
  luggage_storage: boolean;

  @ApiProperty({ example: 'phone_number' })
  phone_number: string;
}
