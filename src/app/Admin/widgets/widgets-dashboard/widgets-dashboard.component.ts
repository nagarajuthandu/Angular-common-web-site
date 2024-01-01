import { Component, OnInit } from '@angular/core';
import { OurService } from '../../../services/our-service.service';

@Component({
  selector: 'app-widgets-dashboard',
  templateUrl: './widgets-dashboard.component.html',
  styleUrls: ['./widgets-dashboard.component.css']
})
export class WidgetsDashboardComponent implements OnInit {
  widgets: any[] = [];

  constructor(private ourService: OurService) {}

  ngOnInit() {
    this.loadWidgets();
  }

  loadWidgets() {
    this.ourService.getAllWidget().subscribe(widgets => {
      this.widgets = widgets;
    });
  }

  addToMyWebsite(widget: any) {
    let widgetContent: any = {};
    widgetContent.widget = widget._id;
    widgetContent.content = [];
    this.ourService.addService(widgetContent).subscribe();
  }
}
