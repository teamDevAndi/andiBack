import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Square } from './interfaces/square.interface';
import { CreateSquareDto } from './dto/square.dto';

@Injectable()
export class SquaresService {
  constructor(
    @InjectModel('Square') private readonly squareModel: Model<Square>,
  ) {}

  async create(createSquareDto: CreateSquareDto): Promise<Square> {
    const newSquare = new this.squareModel(createSquareDto);
    return newSquare.save();
  }

  async findAll(): Promise<Square[]> {
    return this.squareModel.find().populate(['place_id', 'attractions', 'nearby_facilities']).exec();
  }

  async findOne(id: string): Promise<Square> {
    const result = await this.squareModel.findById(id)
    .populate(['place_id', 'attractions', 'nearby_facilities']).exec();
    if (!result) throw new NotFoundException('Square not found');
    return result;
  }

  async remove(id: string): Promise<any> {
    return this.squareModel.findByIdAndDelete(id);
  }
}
