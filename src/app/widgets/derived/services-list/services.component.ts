import { Component,OnInit,Input } from '@angular/core';
import { OurService } from '../../../services/our-service.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesListComponent implements OnInit{
  @Input() content: any[] = [];
  services:any = this.content
  ngOnInit(): void {
    this.services = this.content
  }
 

}
