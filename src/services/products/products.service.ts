import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/products/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ]
  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find(item => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload
    }
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const productIndex = this.products.findIndex(item => item.id === id);
    if (productIndex === -1) {
      return null;
    }
    const product = this.products[productIndex];
    this.products[productIndex] = {
      ...product,
      ...payload
    }
    return this.products[productIndex];
  }

  delete(id: number) {
    const productIndex = this.products.findIndex(item => item.id === id);
    if (productIndex === -1) {
      return null;
    }
    this.products.splice(productIndex, 1);
    return true;
  }
}
