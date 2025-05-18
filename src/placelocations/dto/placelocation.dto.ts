import { IsNotEmpty, IsArray, IsNumber, IsMongoId } from 'class-validator';

export class CreatePlaceLocationDto {
  @IsMongoId()
  @IsNotEmpty()
  id_place: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsArray()
  sub_category: string[];
}
