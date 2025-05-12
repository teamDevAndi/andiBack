import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class MonumentsDto {
  @ApiProperty({ example: 'construction_date' })
  construction_date: Date;

  @ApiProperty({ example: 'material_used' })
  material_used: Languages[];

  @ApiProperty({ example: 'height' })
  height: number;

  @ApiProperty({ example: 'nearby_facilities' })
  nearby_facilities: Languages[];
}
