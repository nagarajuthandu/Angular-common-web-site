import { Component, OnInit } from '@angular/core';
import { SlideService } from '../../services/slide.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides: any[] = [];

  constructor(private slideService: SlideService) {}

  ngOnInit() {
    this.slideService.getSlides().subscribe(slides => {
      this.slides = slides;
    });
  }
}
