import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';
import { PlaceDto } from '../../dto/place.dto';

export class MuseumDto extends PlaceDto {
  @ApiProperty({ example: 'collection_type' })
  collection_type: Languages[];

  @ApiProperty({ example: 'internal_guide' })
  internal_guide: boolean;

  @ApiProperty({ example: 'family_friendly' })
  family_friendly: boolean;

  @ApiProperty({ example: 'photography_policy' })
  photography_policy: Languages[];

  @ApiProperty({ example: 'shop_available' })
  shop_available: boolean;

  @ApiProperty({ example: 'visit_duration' })
  visit_duration: number;

  @ApiProperty({ example: 'facilities' })
  facilities: Languages[];

  @ApiProperty({ example: 'phone_number' })
  phone_number: string;
}
