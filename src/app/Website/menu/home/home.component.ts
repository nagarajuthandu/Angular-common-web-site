import { Component, } from '@angular/core';
import { LoadSectionsService } from 'src/app/services/loadSections.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sections:any = [];
  constructor(private loadSectionsService: LoadSectionsService) {}
  ngOnInit(): void {
    this.loadSectionsService.getHomeSections().subscribe((sections) => {
      this.sections = sections;
    });
  }
}
