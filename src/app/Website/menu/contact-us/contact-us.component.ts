import { Component } from '@angular/core';
import { LoadSectionsService } from 'src/app/services/loadSections.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  sections:any = [];
  constructor(private loadSectionsService: LoadSectionsService) {}
  ngOnInit(): void {
    this.loadSectionsService.getContactUsSections().subscribe((sections) => {
      this.sections = sections;
    });
  }
}
