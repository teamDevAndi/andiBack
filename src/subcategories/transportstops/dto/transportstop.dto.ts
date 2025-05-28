import {
  IsMongoId,
  IsBoolean,
  IsArray,
  IsString
} from 'class-validator';

export class CreateTransportStopDto {
  @IsMongoId()
  place_id: string;

  @IsArray()
  @IsMongoId({ each: true })
  transport_type: string[];

  @IsArray()
  @IsMongoId({ each: true })
  lines_available: string[];

  @IsBoolean()
  shelter_available: boolean;

  @IsBoolean()
  seating_available: boolean;

  @IsString()
  frequency: string;
}
