import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  page: any = '';
  WidgetContent:any = [];

  constructor(private route: ActivatedRoute, private PageService: PageService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.page = params.get('page')
      this.PageService.getPage(this.page).subscribe((pagesettings) => {
      this.WidgetContent = pagesettings[0].WidgetContent;
    });
    })    
  }
}
