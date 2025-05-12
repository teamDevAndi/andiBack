import { PlaceDto } from '../../dto/place.dto';
import { ApiProperty } from '@nestjs/swagger';

export class TheaterDto extends PlaceDto {
  @ApiProperty({ example: 'seating_capacity' })
  seating_capacity: number;

  @ApiProperty({ example: 'guided_tour_available' })
  guided_tour_available: boolean;
}
