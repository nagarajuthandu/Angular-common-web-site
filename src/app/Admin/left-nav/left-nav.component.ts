import { Component, OnInit } from '@angular/core';
import { WidgetServiceService } from '../../services/widget-service.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit{
  widgets: any[] = [];

  constructor(private widgetServiceService: WidgetServiceService) {}
  ngOnInit() {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgetServiceService.getAllWidgetsContent().subscribe(widgets => {
      this.widgets = widgets;
    });
  }

}
