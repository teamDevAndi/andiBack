import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';

export class CoordinateDto {
  @IsNotEmpty()
  lat: number;

  @IsNotEmpty()
  lng: number;
}

export class CreateTransportLineDto {
  @IsNotEmpty()
  id_transport: Types.ObjectId;

  @IsString()
  code: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoordinateDto)
  route: CoordinateDto[];

  @IsOptional()
  @IsArray()
  nearby_places?: Types.ObjectId[];
}