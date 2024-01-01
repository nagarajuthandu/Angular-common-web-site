import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-admin-widgets-page',
  templateUrl: './admin-widgets-page.component.html',
  styleUrls: ['./admin-widgets-page.component.css']
})
export class AdminWidgetsPageComponent implements OnInit{
  constructor(private router: Router,
    private route: ActivatedRoute,){}
    widget:any
    ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.widget = params.get('widget')
      })   
    }
}
