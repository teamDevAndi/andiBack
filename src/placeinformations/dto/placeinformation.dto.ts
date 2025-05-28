import { IsNotEmpty, IsMongoId, IsString } from 'class-validator';

export class CreatePlaceInformationDto {
  @IsMongoId()
  @IsNotEmpty()
  id_place: string;

  @IsString()
  historical: string;

  @IsString()
  architectural: string;

  @IsString()
  cultural: string;

  @IsString()
  popular: string;
}
