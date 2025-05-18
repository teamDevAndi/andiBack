import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ATM, ATMSchema } from './schemas/atm.schema';
import { AtmsService } from './atms.service';
import { AtmsController } from './atms.controller';
import { Currency, CurrencySchema } from './schemas/currencies.schema';
import { Language, LanguageSchema } from 'src/common/schemas/languages.shcema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ATM.name, schema: ATMSchema },
      { name: Currency.name, schema: CurrencySchema },
      { name: Language.name, schema: LanguageSchema },
      { name: Place.name, schema: PlaceSchema },
      
    ])
  ],
  controllers: [AtmsController],
  providers: [AtmsService],
})
export class AtmsModule {}
