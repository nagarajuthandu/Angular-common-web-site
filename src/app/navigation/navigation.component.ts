import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isNavigationSticky = false

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

  menuItems = [
    { label: 'Home', link: '/home' },
    { label: 'About', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Contact Us', link: '/contact-us' }
  ];

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
