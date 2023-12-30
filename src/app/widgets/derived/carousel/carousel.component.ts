import { Component, Input, OnInit } from '@angular/core';
import { SlideService } from '../../../services/slide.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
   slides: any[] = [];
   @Input() content:any

  constructor(private slideService: SlideService) {}

  ngOnInit() {
      this.slides = this.content;
      console.log(this.slides)
  }
}
