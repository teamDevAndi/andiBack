import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/pipes/parse-int/parse-int.pipe';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  get() {
    return this.productsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload:any){
    return this.productsService.create(payload);
  }
}
