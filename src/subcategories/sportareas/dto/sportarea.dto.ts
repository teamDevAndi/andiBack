import { IsArray, IsString } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';

export class CreateSportAreaDto {
  @IsString()
  place_id: string;

  @IsArray()
  sports_available: string[];

  @IsString()
  surface_type: string;

  @IsArray()
  facilities: string[];

  @IsArray()
  tips: Translation[];

  @IsString()
  phone_number: string;
}