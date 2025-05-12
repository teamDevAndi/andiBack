import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Place } from 'src/search-places/schemas/place.schema';
import { Languages } from 'src/search-places/types/place.type';

export class SportArea extends Place {
  @Prop({ required: true })
  sportsAvailable: Languages[];

  @Prop({ required: true })
  surfaceType: Languages[];

  @Prop({ required: true })
  facilities: Languages[];

  @Prop({ required: true })
  tips: Languages[];

  @Prop({ required: true })
  phoneNumber: string;
}

export const SportAreaSchema = SchemaFactory.createForClass(SportArea);
