import { IsBoolean, IsMongoId, IsNumber } from 'class-validator';

export class CreateTheaterDto {
  @IsMongoId()
  place_id: string;

  @IsNumber()
  seating_capacity: number;

  @IsBoolean()
  guided_tour_available: boolean;
}
