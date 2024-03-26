import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products= [
    { id: 1, name: 'Product 1', price: 20, imageUrl: 'assets/lipstick.png' },
    { id: 2, name: 'Product 2', price: 30, imageUrl: 'assets/moi.jpeg' },
    { id: 3, name: 'Product 3', price: 25, imageUrl: 'assets/serum.jpg' },
    { id: 4, name: 'Product 1', price: 20, imageUrl: 'assets/sun.jpg' },
    { id: 5, name: 'Product 2', price: 30, imageUrl: 'assets/moi.jpeg' },
    { id: 6, name: 'Product 3', price: 25, imageUrl: 'assets/lipstick.png' }
  ];

}
