// menu.component.ts
import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service'; // Adjust the path accordingly
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pages: any[] = [];
  selectedPage: any;
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

  onAddToMenu(label:any): void {
    let menu:any = {}
    menu.label=label
    menu.link='/'+label
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
