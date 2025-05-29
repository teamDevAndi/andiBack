import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChurchesService } from './churches.service';
import { ChurchesController } from './churches.controller';
import { Church, ChurchSchema } from './schemas/church.schema';
import { Denomination, DenominationSchema } from './schemas/denomination.schema';
import { ArchitecturalStyle, ArchitecturalStyleSchema } from './schemas/architectural_style.schema';
import { Place, PlaceSchema } from 'src/places/schemas/place.schema';
import { Facility, FacilitySchema } from 'src/common/schemas/facility.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Church.name, schema: ChurchSchema },
      { name: Denomination.name, schema: DenominationSchema },
      { name: ArchitecturalStyle.name, schema: ArchitecturalStyleSchema },
      { name: Facility.name, schema: FacilitySchema },
      { name: Place.name, schema: PlaceSchema },
    ]),
  ],
  controllers: [ChurchesController],
  providers: [ChurchesService],
})
export class ChurchesModule {}
