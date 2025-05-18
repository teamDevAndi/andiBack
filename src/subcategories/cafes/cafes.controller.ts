import { Controller, Get, Param, Delete } from '@nestjs/common';
import { CafeService } from './cafes.service';

@Controller('cafes')
export class CafesController {
  constructor(private readonly cafeService: CafeService) {}

  @Get()
  findAll() {
    return this.cafeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cafeService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cafeService.remove(id);
  }
}
