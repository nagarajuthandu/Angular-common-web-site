import { Component } from '@angular/core';
import { LoadSectionsService } from 'src/app/services/loadSections.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  sections:any = [];
  constructor(private loadSectionsService: LoadSectionsService) {}
  ngOnInit(): void {
    this.loadSectionsService.getServicesSections().subscribe((sections) => {
      this.sections = sections;
    });
  }
}
