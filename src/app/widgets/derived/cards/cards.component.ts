import { Component,OnInit,Input } from '@angular/core';
import { WidgetServiceService } from '../../../services/widget-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  @Input() content: any[] = [];
  services:any = this.content
  ngOnInit(): void {
    this.services = this.content
  }
 

}
