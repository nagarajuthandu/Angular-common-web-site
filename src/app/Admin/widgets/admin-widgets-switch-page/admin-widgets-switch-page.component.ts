import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-admin-widgets-switch-page',
  templateUrl: './admin-widgets-switch-page.component.html',
  styleUrls: ['./admin-widgets-switch-page.component.css']
})
export class AdminWidgetsSwitchPageComponent implements OnInit{
  constructor(private router: Router,
    private route: ActivatedRoute,){}
    widget:any
    ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.widget = params.get('widget')
      })   
    }
}
