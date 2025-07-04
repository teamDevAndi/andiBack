import { Controller, Get, Param } from '@nestjs/common';
import { TransportLineService } from './transportLine.service';

@Controller('transportLines')
export class TransportLineController {
  constructor(private readonly service: TransportLineService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Get('nearby/:placeId')
  findByNearbyPlace(@Param('placeId') placeId: string) {
    return this.service.findByNearbyPlace(placeId);
  }
}
