// create-page.component.ts
import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service'; 
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit{
  newPage: any = {}
  widgetOptions:any=[]
  selectedWidgets: any[] = [];
  pages:any=[]
  isEditMode = false;
  constructor(private pageService: PageService, private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.loadWidgets();
    this.loadPages();
  }

  onSubmit(): void {
    this.newPage.WidgetContent=this.selectedWidgets
    if(this.isEditMode)
    {
      this.pageService.updatePage(this.newPage._id,this.newPage).subscribe(
        (createdPage) => {
          this.loadWidgets();
          this.loadPages();
        }
      );
    }
    else{
      this.pageService.createPage(this.newPage).subscribe(
        (updatePage) => {
          this.loadWidgets();
          this.loadPages();
        }
      );
    }

  }

  loadWidgets(): void {
    this.widgetService.getWidgetsWithContent().subscribe(
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
    this.pageService.deletePage(page).subscribe(()=>{
      this.loadWidgets();
      this.loadPages();
    })
  }

  onEditPage(page: any) {
    this.newPage = page
    const widgets= page.WidgetContent.map((m:any) =>m._id)
    this.selectedWidgets=widgets
    console.log(this.selectedWidgets)
    this.isEditMode = true;
  }

  cancelEdit() {
    this.resetForm();
  }

  private resetForm() {
    this.isEditMode = false;
  }

  getWidgetType(widgetId: string): string {
    const widget = this.widgetOptions.find((w:any) => w._id === widgetId);
    return widget ? `${widget.widget.type} ${widget?.content?.title ?? ''}`  : '';
  }
}
