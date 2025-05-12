import { ApiProperty } from '@nestjs/swagger';
import { PlaceDto } from 'src/search-places/dto/place.dto';
import { Languages } from 'src/search-places/types/place.type';

export class TreekingDto extends PlaceDto {
  @ApiProperty({ example: 'estimateDurationMinutes' })
  estimateDurationMinutes: number;

  @ApiProperty({ example: 'distanceMeters' })
  distanceMeters: number;

  @ApiProperty({ example: 'difficultLevel' })
  difficultLevel: number;

  @ApiProperty({ example: 'maxAltitude' })
  maxAltitude: number;

  @ApiProperty({ example: 'campingAllowed' })
  campingAllowed: boolean;

  @ApiProperty({ example: 'wildlifeSighting' })
  wildlifeSighting: boolean;

  @ApiProperty({ example: 'equipmentRequired' })
  equipmentRequired: Languages[];

  @ApiProperty({ example: 'tips' })
  tips: Languages[];
}
