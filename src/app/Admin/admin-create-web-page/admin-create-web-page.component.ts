// create-page.component.ts
import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service'; 
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'app-admin-create-web-page',
  templateUrl: './admin-create-web-page.component.html',
  styleUrls: ['./admin-create-web-page.component.css']
})
export class AdminCreateWebPageComponent implements OnInit{
  isCreateNew : boolean = false
  newPage: any = {}
  previewPage: any
  widgetOptions:any=[]
  selectedWidgets: any[] = [];
  pages:any=[]
  isEditMode = false;
Object: any;
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
          this.isEditMode = false
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
    this.isCreateNew = false
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
    this.isCreateNew = true
  }

  cancelEdit() {
    this.resetForm();
  }

  private resetForm() {
    this.isEditMode = false;
  }

  getWidgetType(widgetId: string): string {
    const widget = this.widgetOptions.find((w:any) => w._id === widgetId);
    return widget ? `${widget.widget.displayName} ${widget?.title ?? ''}`  : '';
  }

  showPreviewForSelectedPage(page:any) {
    this.previewPage = page
  }
  closePreviewForSelectedPage(){
    this.previewPage = null
  }
  addNewPage(){
    this.isCreateNew = true
  }
}
