import { Controller, Delete, HttpCode,HttpStatus , Get, Param, Query } from '@nestjs/common';
import { CommissionersService } from './commissioners.service';

@Controller('commissioners')
export class CommissionersController {
  constructor(private readonly commissionerService: CommissionersService) {}

  @Get()
  findAll() {
    return this.commissionerService.findAll();
  }

  @Get(':place_id')
  findOne(@Param('place_id') place_id: string, @Query('lang') lang = 'en') {

    return this.commissionerService.findOne(place_id, lang);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.commissionerService.delete(id);
  }
}
