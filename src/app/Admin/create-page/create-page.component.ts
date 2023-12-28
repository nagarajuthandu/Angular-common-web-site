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
  pages:any=[]
  constructor(private pageService: PageService, private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.loadWidgets();
    this.loadPages();
  }

  onSubmit(): void {
    this.pageService.createPage(this.newPage).subscribe(
      (createdPage) => {
        this.loadWidgets();
        this.loadPages();
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

  loadPages(): void {
    this.pageService.getPages().subscribe(
      (pages) => {
        this.pages = pages;
      },
      (error) => {
        console.error('Error loading widgets', error);
      }
    );
  }

  onDeletePage(page: any): void {
    this.pageService.deletePage(page._id).subscribe(()=>{
      this.loadWidgets();
      this.loadPages();
    })
  }
}
