import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place } from './schemas/place.schema';
import { PlaceLocation } from './schemas/place-location.schema';
import { PlaceDto } from './dto/place.dto';

@Injectable()
export class SearchPlacesService {
  constructor(
    @InjectModel(Place.name) private placeModel: Model<Place>,
    @InjectModel(PlaceLocation.name) private placeLocationModel: Model<PlaceLocation>,
  ) {}

  private validateCategory(placeDto: PlaceDto) {
    const validCategories = [
      'Treeking', 'Airport', 'Church', 'Atm', 'BusTerminal', 'Cafe',
      'Commissioner', 'FoodArea', 'Hotel', 'InfoTour', 'Lake', 'Laundries',
      'Mall', 'Market', 'MedicalCenter', 'Monuments', 'Museum', 'Park',
      'Parking', 'Restaurant', 'Ruins', 'SportArea', 'Square', 'SuperMarket',
      'Theater', 'TouristAgency', 'TransportStop', 'UniqueStore', 'ViewPoints',
    ];

    if (!placeDto.category || !validCategories.includes(placeDto.category)) {
      throw new BadRequestException('Invalid or missing category');
    }
  }

  async findPlacesByCategory(category: string) {
    return await this.placeModel.find({ category }).exec();
  }

  async findAllPlaces() {
    return await this.placeModel.find().exec();
  }

  async findPlaceById(id: string) {
    return await this.placeModel.findById(id).exec();
  }

  async addPlace(placeDto: PlaceDto) {
    this.validateCategory(placeDto);

    const newPlace = new this.placeModel({
      name: placeDto.name,
      picturePrincipal: placeDto.picturePrincipal,
      subCategory: placeDto.subCategory,
      guideRequired: placeDto.guideRequired,
      address: placeDto.address,
      times: placeDto.times,
      costs: placeDto.costs,
      description: placeDto.description,
      labels: placeDto.labels,
      category: placeDto.category,
    });

    const newPlaceLocation = new this.placeLocationModel({
      idPlace: newPlace._id,
      latitude: placeDto.latitude,
      longitude: placeDto.longitude,
    });

    await newPlace.save();
    await newPlaceLocation.save();

    return { message: 'Place added successfully' };
  }

  async updatePlace(id: string, placeDto: PlaceDto) {
    const updatedPlaceLocation = await this.placeLocationModel.findOneAndUpdate(
      { idPlace: id },
      { latitude: placeDto.latitude, longitude: placeDto.longitude },
      { new: true },
    );

    if (!updatedPlaceLocation) {
      throw new Error('Place location not found');
    }

    const updatedPlace = await this.placeModel.findByIdAndUpdate(
      updatedPlaceLocation._id,
      {
        name: placeDto.name,
        picturePrincipal: placeDto.picturePrincipal,
        subCategory: placeDto.subCategory,
        guideRequired: placeDto.guideRequired,
        address: placeDto.address,
        times: placeDto.times,
        costs: placeDto.costs,
        description: placeDto.description,
        labels: placeDto.labels,
      },
      { new: true },
    );

    return { message: 'Place updated successfully' };
  }

  async deletePlace(id: string) {
    const placeLocation = await this.placeLocationModel.findOne({
      idPlace: id,
    });
    if (!placeLocation) {
      throw new Error('Place location not found');
    }
    const idPlace = placeLocation.idPlace;

    const deletedPlaceLocation =
      await this.placeLocationModel.findByIdAndDelete(placeLocation._id);
    if (!deletedPlaceLocation) {
      throw new Error('Place location not found');
    }
    const deletedPlace = await this.placeModel.findByIdAndDelete(idPlace);
    if (!deletedPlace) {
      throw new Error('Place not found');
    }
    return { message: 'Place deleted successfully' };
  }
}
