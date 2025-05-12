import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place } from './schemas/place.schema';
import { PlaceLocation } from './schemas/place-location.schema';
import { PlaceDto } from './dto/place.dto';
import { TreekingDto } from './discriminators/treeking/treeking.dto';

@Injectable()
export class SearchPlacesService {
    constructor(
        @InjectModel(Place.name) private placeModel: Model<Place>,
        @InjectModel(PlaceLocation.name) private placeLocationModel: Model<PlaceLocation>
    ) { }

    async findPlacesByCategory(category: string) {
        return await this.placeModel.find({ category }).exec();
    }

    async findAllPlaces() {
        return await this.placeModel.find().exec();
    }

    async findPlaceById(id: string) {
        return await this.placeModel.findById(id).exec();
    }

    // use dto of every discriminator, u can use an array maybe or just a generic dto (PlaceDto)
    async addPlace(placeDto: TreekingDto) {
        const category = placeDto.category;

        if (!["Treeking"]. includes(category))
            throw new BadRequestException("Invalid category");

        const newPlace = new this.placeModel({
            name: placeDto.name,
            picturePrincipal: placeDto.picturePrincipal,
            subCategory: placeDto.subCategory,
            guideRequired: placeDto.guideRequired,
            address: placeDto.address,
            times: placeDto.times,
            costs: placeDto.costs,
            description: placeDto.description,
            labels: placeDto.labels
        });

        const newPlaceLocation = new this.placeLocationModel({
            idPlace: newPlace._id,
            latitude: placeDto.latitude,
            longitude: placeDto.longitude
        });

        await newPlace.save();
        await newPlaceLocation.save();

        return { message: "Place added successfully" };
    }

    async updatePlace(id: string, placeDto: PlaceDto) {
        const updatedPlaceLocation = await this.placeLocationModel.findOneAndUpdate(
            { idPlace: id },
            { latitude: placeDto.latitude, longitude: placeDto.longitude },
            { new: true });

        if (!updatedPlaceLocation) {
            throw new Error("Place location not found");
        }

        const updatedPlace = await this.placeModel.findByIdAndUpdate(updatedPlaceLocation._id, {
            name: placeDto.name,
            picturePrincipal: placeDto.picturePrincipal,
            subCategory: placeDto.subCategory,
            guideRequired: placeDto.guideRequired,
            address: placeDto.address,
            times: placeDto.times,
            costs: placeDto.costs,
            description: placeDto.description,
            labels: placeDto.labels
        }, { new: true });

        return { message: "Place updated successfully" };
    }

    async deletePlace(id: string) {
        const placeLocation = await this.placeLocationModel.findOne({ idPlace: id });
        if (!placeLocation) {
            throw new Error("Place location not found");
        }
        const idPlace = placeLocation.idPlace;

        const deletedPlaceLocation = await this.placeLocationModel.findByIdAndDelete(placeLocation._id);
        if (!deletedPlaceLocation) {
            throw new Error("Place location not found");
        }
        const deletedPlace = await this.placeModel.findByIdAndDelete(idPlace);
        if (!deletedPlace) {
            throw new Error("Place not found");
        }
        return { message: "Place deleted successfully" };
    }
}
