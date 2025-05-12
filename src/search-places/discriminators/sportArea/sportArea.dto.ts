import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class SportAreaDto {
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
