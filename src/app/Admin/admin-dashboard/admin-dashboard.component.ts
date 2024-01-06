import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service'; // Replace with the correct path

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  pages:any

  constructor(private PageService: PageService) {}

  ngOnInit(): void {
    this.loadPageSettings();
  }

  loadPageSettings(): void {
    this.PageService.getPages().subscribe(
      (pages) => {
        this.pages = pages
      },
      (error) => {
        console.error('Error loading page settings', error);
      }
    );
  }

  onSliderToggle(isChecked: boolean): void {
  }

}
