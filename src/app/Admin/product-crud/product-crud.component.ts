// product-crud.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
})
export class ProductCrudComponent implements OnInit {
  products: any[] = [];
  productForm: FormGroup;
  editedIndex: number | null = null;
  showForm: boolean = false;

  constructor(private productService: ProductService, private fb: FormBuilder, private sessionService: SessionService,private router: Router) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      imageUrl: [''],
    });
  }

  ngOnInit(): void {
    if (!this.sessionService.isLoggedIn) {
      this.router.navigate(['/admin/login']);
    }
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  openForm(): void {
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.productForm.reset();
    this.editedIndex = null;
  }

  addProduct(): void {
    const newProduct = this.productForm.value;
    this.productService.addProduct(newProduct);
    this.closeForm();
  }

  editProduct(index: number): void {
    const product = this.products[index];
    this.productForm.patchValue(product);
    this.editedIndex = index;
    this.openForm();
  }

  updateProduct(): void {
    if (this.editedIndex !== null) {
      const updatedProduct = this.productForm.value;
      this.productService.updateProduct(this.editedIndex, updatedProduct);
      this.closeForm();
    }
  }

  deleteProduct(index: number): void {
    this.productService.deleteProduct(index);
  }
}
