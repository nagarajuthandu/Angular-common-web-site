import { Component,OnInit,Input } from '@angular/core';
import { WidgetServiceService } from '../../../services/widget-service.service';

@Component({
  selector: 'app-cards-list-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit{
  @Input() content: any[] = [];
  services:any = this.content
  ngOnInit(): void {
    this.services = this.content
  }
 

}
