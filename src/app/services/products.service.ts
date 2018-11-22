import { Injectable } from '@angular/core';
import { productsData } from '../helpers/sample data/products-data'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = productsData.map((product, id) => {
      const enhancedProduct = { ...product };
      Object.defineProperty(enhancedProduct, 'id', {value: id})
      return enhancedProduct;
  });
  constructor() {
  }
}
