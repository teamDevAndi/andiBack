import { IsBoolean, IsMongoId,IsNotEmpty, IsNumber, IsArray } from 'class-validator';
import { Translation } from 'src/common/interfaces/base.interface';

export class CreateViewpointDto {
  @IsMongoId()
  @IsNotEmpty()
  place_id: string;

  @IsNumber()
  altitude_meters: number;

  @IsMongoId()
  view_type: string;

  @IsBoolean()
  has_telescope: boolean;

  @IsArray()
  tips: Translation[];
}
