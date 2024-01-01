import { Component, OnInit } from '@angular/core';
import { OurService } from 'src/app/services/our-service.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit{
  widgets: any[] = [];

  constructor(private ourService: OurService) {}
  ngOnInit() {
    this.loadWidgets();
  }

  loadWidgets() {
    this.ourService.getAllWidgetsContent().subscribe(widgets => {
      this.widgets = widgets;
    });
  }

}
