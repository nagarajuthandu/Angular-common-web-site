import { Component, OnInit } from '@angular/core';
import { WidgetServiceService } from '../../../services/widget-service.service';

@Component({
  selector: 'app-widgets-dashboard',
  templateUrl: './widgets-dashboard.component.html',
  styleUrls: ['./widgets-dashboard.component.css']
})
export class WidgetsDashboardComponent implements OnInit {
  widgets: any[] = [];
  title:any
  addedWidgets:any=[]

  constructor(private widgetServiceService: WidgetServiceService) {}

  ngOnInit() {
    this.loadWidgets();
    this.loadWidgetsContent()
  }

  loadWidgets() {
    this.widgetServiceService.getAllWidget().subscribe(widgets => {
      this.widgets = widgets;
    });
  }

  addToMyWebsite(widget: any) {
    let widgetContent: any = {};
    widgetContent.widget = widget._id;
    widgetContent.title = widget.title
    widgetContent.content = [];
    this.widgetServiceService.addService(widgetContent).subscribe(()=>{
      this.loadWidgetsContent()
    });
  }

  loadWidgetsContent() {
    this.widgetServiceService.getAllWidgetsContent().subscribe(widgets => {
      this.addedWidgets = widgets;
    });
  }

  deleteAddedWidget(id:any){
    this.widgetServiceService.deleteService(id).subscribe(()=>{
      this.loadWidgetsContent()
    })
  }
}
