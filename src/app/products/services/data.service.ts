import { Injectable } from '@angular/core';
export interface products {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  products: products[] =[
    { id: 1, name: 'Product 1', price: 20, imageUrl: 'assets/lipstick.png' },
    { id: 2, name: 'Product 2', price: 30, imageUrl: 'assets/moi.jpeg' },
    { id: 3, name: 'Product 3', price: 25, imageUrl: 'assets/serum.jpg' },
    { id: 4, name: 'Product 1', price: 20, imageUrl: 'assets/sun.jpg' },
    { id: 5, name: 'Product 2', price: 30, imageUrl: 'assets/moi.jpeg' },
    { id: 6, name: 'Product 3', price: 25, imageUrl: 'assets/lipstick.png' }
  ];
  constructor() { }
  getProductById(id: number) {
    return this.products.find(item => item.id === id);
  }
}
