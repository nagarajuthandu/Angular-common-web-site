import { Component, OnInit } from '@angular/core';
import { WidgetServiceService } from '../../services/widget-service.service';

@Component({
  selector: 'app-admin-left-side-nav',
  templateUrl: './admin-left-side-nav.component.html',
  styleUrls: ['./admin-left-side-nav.component.css']
})
export class AdminLeftSideNavComponent implements OnInit{
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
