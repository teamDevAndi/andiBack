import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UniqueStore } from './schemas/uniquestore.schema';
import { CreateUniqueStoreDto } from './dto/uniquestore.dto';

@Injectable()
export class UniqueStoresService {
  constructor(@InjectModel(UniqueStore.name) private model: Model<UniqueStore>) {}

  create(dto: CreateUniqueStoreDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate('place_id specialization exclusive_items');
  }

  async findOne(id: string) {
    const store = await this.model.findById(id).populate('place_id specialization exclusive_items');
    if (!store) throw new NotFoundException('Unique store not found');
    return store;
  }

  async remove(id: string) {
    const deleted = await this.model.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Unique store not found');
    return deleted;
  }
}
