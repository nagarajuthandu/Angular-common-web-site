import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-widgets-crud-page',
  templateUrl: './widgets-crud-page.component.html',
  styleUrls: ['./widgets-crud-page.component.css']
})
export class WidgetsCrudPageComponent implements OnInit{
  constructor(private router: Router,
    private route: ActivatedRoute,){}
    widget:any
    ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.widget = params.get('widget')
        console.log( this.widget )
      })   
    }
}
