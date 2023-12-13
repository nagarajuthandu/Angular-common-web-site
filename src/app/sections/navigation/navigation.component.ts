import { Component,HostListener,OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  isNavigationSticky = false
  menuItems: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(items => {
      this.menuItems = items;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollPosition > 50)
    {
      this.isNavigationSticky = true
    }
    else {
      this.isNavigationSticky = false;
    }
  }

  isNavbarOpen: boolean = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
