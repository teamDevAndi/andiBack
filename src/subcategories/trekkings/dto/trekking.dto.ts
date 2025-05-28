import { IsBoolean, IsNotEmpty, IsNumber, IsArray, IsMongoId } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';


export class CreateTrekkingDto {
  @IsMongoId()
  @IsNotEmpty()
  place_id: string;

  @IsNumber()
  estimated_duration_minutes: number;

  @IsNumber()
  distance_meters: number;

  @IsNumber()
  difficult_level: number;

  @IsNumber()
  max_altitude_meters: number;

  @IsBoolean()
  camping_allowed: boolean;

  @IsBoolean()
  wildlife_sightings: boolean;

  @IsArray()
  @IsMongoId({ each: true })
  equipment_required: string[];

  @IsArray()
  tips: Translation[];
}
