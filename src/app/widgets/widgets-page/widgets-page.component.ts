import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets-page',
  templateUrl: './widgets-page.component.html',
  styleUrls: ['./widgets-page.component.css']
})
export class WidgetsPageComponent implements OnInit {
  @Input() WidgetContent: any[] = [];

  ngOnInit(): void {
      console.log(this.WidgetContent)
  }
  
}
