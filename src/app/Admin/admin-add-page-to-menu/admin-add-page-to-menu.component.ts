// menu.component.ts
import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service'; // Adjust the path accordingly
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-admin-add-page-to-menu',
  templateUrl: './admin-add-page-to-menu.component.html',
  styleUrls: ['./admin-add-page-to-menu.component.css']
})
export class AdminAddPageToMenuComponent implements OnInit {
  pages: any[] = [];
  selectedPage: any = {};
  menuItems:any[] = []

  constructor(private pageService: PageService, private menuService:MenuService) {}

  ngOnInit(): void {
    this.loadPages();
    this.loadMenuItems();
  }

  loadPages(): void {
    this.pageService.getPages().subscribe(
      (pages) => {
        this.pages = pages;
      },
      (error) => {
        console.error('Error loading pages', error);
      }
    );
  }

  onAddToMenu(selectedPage:any): void {
    let menu:any = {}
    const page:any = this.pages.find((p:any)=>p._id === selectedPage)
    menu.label=page.displayName
    menu.link='/'+page.pagename
    this.menuService.createMenuItem(menu).subscribe(()=>{
      this.loadMenuItems();
    });
    
  }

  onDeleteMenuItem(menuItem:any):void{
    this.menuService.deleteMenuItem(menuItem._id).subscribe(()=>{
      this.loadMenuItems();
    });
    
  }

  loadMenuItems():any {
    this.menuService.getMenuItems().subscribe((menuItems)=>{
      this.menuItems = menuItems
    })
  }
}
