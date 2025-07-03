import { Body, Controller, Post } from '@nestjs/common';
import { PlaceRequestService } from './placerequest.service';
import { CreatePlaceRequestDto } from './dto/placerequest.dto';

@Controller('place-request')
export class PlaceRequestController {
  constructor(private readonly placeRequestService: PlaceRequestService) {}

  @Post()
  async create(@Body() createDto: CreatePlaceRequestDto) {
    return this.placeRequestService.create(createDto);
  }
}
