import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class TransportStopDto {
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
