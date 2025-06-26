import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlaceRequest } from './schema/placerequest.schema';
import { CreatePlaceRequestDto } from './dto/placerequest.dto';

@Injectable()
export class PlaceRequestService {
  constructor(
    @InjectModel(PlaceRequest.name)
    private readonly placeRequestModel: Model<PlaceRequest>,
  ) {}

  async create(data: CreatePlaceRequestDto): Promise<PlaceRequest> {
    const created = new this.placeRequestModel(data);
    return created.save();
  }
}