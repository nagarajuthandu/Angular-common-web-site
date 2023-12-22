import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-widgets-page',
  templateUrl: './widgets-page.component.html',
  styleUrls: ['./widgets-page.component.css']
})
export class WidgetsPageComponent {
  @Input() isSliderVisible: boolean = false;
  @Input() isProductsVisible: boolean = false;
}
