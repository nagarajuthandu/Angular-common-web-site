// create-page.component.ts
import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service'; 
import { Page } from '../../models/page.model';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit{
  newPage: Page = { pagename: '', widgets: [] };
  widgetOptions:any=[]
  constructor(private pageService: PageService, private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  onSubmit(): void {
    this.pageService.createPage(this.newPage).subscribe(
      (createdPage) => {
        console.log('Page created successfully', createdPage);
      },
      (error) => {
        console.error('Error creating page', error);
      }
    );
  }

  loadWidgets(): void {
    this.widgetService.getWidgets().subscribe(
      (widgets) => {
        this.widgetOptions = widgets;
      },
      (error) => {
        console.error('Error loading widgets', error);
      }
    );
  }
}
