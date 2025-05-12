import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PlaceDto } from './place.dto';
export class AddPlacesDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlaceDto)
  @IsNotEmpty()
  places: PlaceDto[];
}
