import { Component } from '@angular/core';
import { AboutUsContentService } from 'src/app/services/about-us-content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutUsContent: any;

  constructor(private staticContentService: AboutUsContentService) {}

  ngOnInit(): void {
    this.staticContentService.getAboutUsContent().subscribe((content) => {
      this.aboutUsContent = content.aboutUs;
    });
  }
}
