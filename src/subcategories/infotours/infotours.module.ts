import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Infotour, InfotourSchema } from './schemas/infotour.schema';
import { InfotoursService } from './infotours.service';
import { InfotoursController } from './infotours.controller';
import { Language, LanguageSchema } from 'src/common/schemas/languages.shcema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Infotour.name, schema: InfotourSchema },
      { name: Language.name, schema: LanguageSchema },
      { name: Place.name, schema: PlaceSchema },
    ])
  ],
  controllers: [InfotoursController],
  providers: [InfotoursService],
})
export class InfotoursModule {}
