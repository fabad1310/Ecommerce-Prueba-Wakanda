import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
   new Product(1, 'Textil Her smile', 'Perfume floral para ellas', 220),
   new Product(2, 'Textil Her smile', 'Perfume floral para ellas', 220),
   new Product(3, 'Textil Her smile', 'Perfume floral para ellas', 220),
   new Product(4, 'Textil Her smile', 'Perfume floral para ellas', 220),
   new Product(5, 'Textil Her smile', 'Perfume floral para ellas', 220),
   new Product(6, 'Textil Her smile', 'Perfume floral para ellas', 320),
   new Product(7, 'Textil Her smile', 'Perfume floral para ellas', 500),
   new Product(8, 'Textil Her smile', 'Perfume floral para ellas', 300),  
   new Product(9, 'Textil Her smile', 'Perfume floral para ellas', 300),
  ]

  constructor() { }

  getProducts(): Product[]{
    return this.products
  }

}
