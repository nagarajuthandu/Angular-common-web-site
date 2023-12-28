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

  constructor(private pageService: PageService, private menuService:MenuService) {}

  ngOnInit(): void {
    this.loadPages();
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
    this.menuService.createMenuItem(menu).subscribe();
  }
}
