import { IsBoolean, IsMongoId,IsNotEmpty, IsNumber, IsArray } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';

export class CreateParkDto {
  @IsMongoId()
  @IsNotEmpty()
  place_id: string;

  @IsNumber()
  area_size: number;

  @IsBoolean()
  pet_friendly: boolean;

  @IsMongoId()
  flora_fauna_highlights: string;

  @IsArray()
  tips: Translation[];
}
