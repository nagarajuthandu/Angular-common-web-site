import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
// Home Page Configuration
isHomeTopBarVisible: boolean = true;
isHomeNavbarVisible: boolean = true;
isHomeSliderVisible: boolean = true;
isHomeProductsVisible: boolean = true;

// Products Page Configuration
isProductsTopBarVisible: boolean = true;
isProductsNavbarVisible: boolean = true;
isProductsSliderVisible: boolean = true;
isProductsProductsVisible: boolean = true;

// Handlers for Home Page Configuration
onHomeTopBarToggle(isChecked: boolean): void {
  this.isHomeTopBarVisible = isChecked;
  // Add logic for handling the change in Home Page Top Bar visibility
}

onHomeNavbarToggle(isChecked: boolean): void {
  this.isHomeNavbarVisible = isChecked;
  // Add logic for handling the change in Home Page Navbar visibility
}

onHomeSliderToggle(isChecked: boolean): void {
  this.isHomeSliderVisible = isChecked;
  // Add logic for handling the change in Home Page Slider visibility
}

onHomeProductsToggle(isChecked: boolean): void {
  this.isHomeProductsVisible = isChecked;
  // Add logic for handling the change in Home Page Products visibility
}

// Handlers for Products Page Configuration
onProductsTopBarToggle(isChecked: boolean): void {
  this.isProductsTopBarVisible = isChecked;
  // Add logic for handling the change in Products Page Top Bar visibility
}

onProductsNavbarToggle(isChecked: boolean): void {
  this.isProductsNavbarVisible = isChecked;
  // Add logic for handling the change in Products Page Navbar visibility
}

onProductsSliderToggle(isChecked: boolean): void {
  this.isProductsSliderVisible = isChecked;
  // Add logic for handling the change in Products Page Slider visibility
}

onProductsProductsToggle(isChecked: boolean): void {
  this.isProductsProductsVisible = isChecked;
  // Add logic for handling the change in Products Page Products visibility
}
}
