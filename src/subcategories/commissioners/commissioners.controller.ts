import { Controller, Delete, HttpCode,HttpStatus , Get, Param } from '@nestjs/common';
import { CommissionersService } from './commissioners.service';

@Controller('commissioners')
export class CommissionersController {
  constructor(private readonly commissionerService: CommissionersService) {}

  @Get()
  findAll() {
    return this.commissionerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.commissionerService.findById(id);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.commissionerService.delete(id);
  }
}
