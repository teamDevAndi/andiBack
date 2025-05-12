import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class TransportStopDto extends PlaceDto {
  @ApiProperty({ example: 'transport_type' })
  transport_type: Languages[];

  @ApiProperty({ example: 'lines_available' })
  lines_available: Languages[];

  @ApiProperty({ example: 'shelter_available' })
  shelter_available: boolean;

  @ApiProperty({ example: 'seating_available' })
  seating_available: boolean;

  @ApiProperty({ example: 'frequency' })
  frequency: string;
}
