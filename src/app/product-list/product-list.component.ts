import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 99.99,
      imageUrl: '/assets/slide1.jpg'
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 129.99,
      imageUrl: '/assets/slide2.jpg'
    },
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 99.99,
      imageUrl: '/assets/slide1.jpg'
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 129.99,
      imageUrl: '/assets/slide2.jpg'
    },
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 99.99,
      imageUrl: '/assets/slide1.jpg'
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 129.99,
      imageUrl: '/assets/slide2.jpg'
    },
  ];
}
