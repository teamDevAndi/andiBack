import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { TransportLine } from './schema/transportLine.schema';
import { CreateTransportLineDto } from './dto/transportLine.dto';
import { NearbyPlace } from './interfaces/nearbyPlace.interface';

@Injectable()
export class TransportLineService {
  constructor(
    @InjectModel(TransportLine.name) private readonly model: Model<TransportLine>,
  ) {}

  async create(dto: CreateTransportLineDto): Promise<TransportLine> {
    return await this.model.create(dto);
  }

  async findAll(): Promise<TransportLine[]> {
    return await this.model.find().populate('id_transport nearby_places');
  }

  async findOne(id: string): Promise<TransportLine | null> {
    return await this.model.findById(id).populate('id_transport nearby_places');
  }



  async findByNearbyPlace(placeId: string) {
    const placeObjectId = new Types.ObjectId(placeId);

    const lines = await this.model
      .find({ nearby_places: placeObjectId })
      .populate({
        path: 'nearby_places',
        populate: {
          path: 'place_location',
        },
      })
      .populate('id_transport');

    if (!lines || lines.length === 0) return [];

    const filtered = lines.map(line => {
      const lineObj = line.toObject();

    const matchedPlaces = ((lineObj.nearby_places as unknown) as NearbyPlace[])
      .filter(place => place._id.toString() === placeId)
      .map(place => ({
        _id: place._id,
        name: place.name,
        address: place.address,
        category: place.category,
        sub_category: place.sub_category,
        picture_principal: place.picture_principal,
        place_location: place.place_location
      }));

      return {
        ...lineObj,
        nearby_places: matchedPlaces,
      };
    });

    return filtered;
  }

}
