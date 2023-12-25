import { Component } from '@angular/core';
import { LoadSectionsService } from 'src/app/services/loadSections.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  sections:any = [];

  constructor(private loadSectionsService: LoadSectionsService) {}

  ngOnInit(): void {
    this.loadSectionsService.getAboutUsSections().subscribe((sections) => {
      this.sections = sections;
    });
  }
}
