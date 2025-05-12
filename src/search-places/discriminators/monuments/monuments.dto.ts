import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class MonumentsDto extends PlaceDto {
  @ApiProperty({ example: 'construction_date' })
  construction_date: Date;

  @ApiProperty({ example: 'material_used' })
  material_used: Languages[];

  @ApiProperty({ example: 'height' })
  height: number;

  @ApiProperty({ example: 'nearby_facilities' })
  nearby_facilities: Languages[];
}
