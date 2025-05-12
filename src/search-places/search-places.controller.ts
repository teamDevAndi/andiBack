import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { SearchPlacesService } from './search-places.service';
import { ApiTags } from '@nestjs/swagger';
import { PlaceDto } from './dto/place.dto';
import { TreekingDto } from './discriminators/treeking/treeking.dto';

@ApiTags('search-places')
@Controller('search-places')
export class SearchPlacesController {
  constructor(private readonly searchPlacesService: SearchPlacesService) {}

  @Get('category/:category')
  async getPlacesByCategory(category: string) {
    return await this.searchPlacesService.findPlacesByCategory(category);
  }

  @Get('get-places')
  async getAllPlaces() {
    return await this.searchPlacesService.findAllPlaces();
  }

  @Get('get-places/:id')
  async getPlaceById(id: string) {
    return await this.searchPlacesService.findPlaceById(id);
  }

  @Post('add-place')
  // add dto as many as discriminators exist, u can use array here too
  async addPlace(@Body() dto: TreekingDto) {
    await this.searchPlacesService.addPlace(dto);
    return { message: 'Place added successfully' };
  }

  @Put('update-place/:id')
  async updatePlace(@Body() placeDto: PlaceDto, id: string) {
    await this.searchPlacesService.updatePlace(id, placeDto);
    return { message: 'Place updated successfully' };
  }

  @Delete('delete-place/:id')
  async deletePlace(id: string) {
    await this.searchPlacesService.deletePlace(id);
    return { message: 'Place deleted successfully' };
  }
}
