import { IsArray, IsMongoId, IsNumber, IsOptional } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';

export class CreateSquareDto {
  @IsMongoId()
  place_id: string;

  @IsMongoId({ each: true })
  attractions: string[];

  @IsNumber()
  area_size: number;

  @IsOptional()
  @IsMongoId({ each: true })
  readonly nearby_facilities?: string[];

  @IsArray()
  tips: Translation[];
}
