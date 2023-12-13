import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = '/assets/data/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productUrl);
  }

  private products: any[] = [];

  addProduct(product: any): void {
    this.products.push(product);
  }

  updateProduct(index: number, product: any): void {
    this.products[index] = product;
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
