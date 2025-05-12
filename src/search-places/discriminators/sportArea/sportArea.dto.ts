import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class SportAreaDto extends PlaceDto {
  @ApiProperty({ example: 'sportsAvailable' })
  sportsAvailable: Languages[];

  @ApiProperty({ example: 'surfaceType' })
  surfaceType: Languages[];

  @ApiProperty({ example: 'facilities' })
  facilities: Languages[];

  @ApiProperty({ example: 'tips' })
  tips: Languages[];

  @ApiProperty({ example: 'Phone_Number' })
  phoneNumber: string;
}
