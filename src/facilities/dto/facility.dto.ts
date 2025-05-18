import { Translation } from 'src/common/interfaces/base.interface';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFacilityDto {
  @IsNotEmpty()
  name: Translation;

  @IsString()
  icon: string;
}
