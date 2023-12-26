import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoadSectionsService } from '../../services/loadSections.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  page: any = '';
  sections:any = [];

  constructor(private route: ActivatedRoute, private loadSectionsService: LoadSectionsService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.page = params.get('page')
      this.loadSectionsService.getSections(this.page).subscribe((sections) => {
      this.sections = sections;
    });
    })    
  }
}
