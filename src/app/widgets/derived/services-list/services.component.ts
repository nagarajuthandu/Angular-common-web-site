import { Component,OnInit } from '@angular/core';
import { OurService } from '../../../services/our-service.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesListComponent implements OnInit{
  services: any[] = [];

  constructor(private serviceService: OurService) {}

  ngOnInit() {
    this.serviceService.getServices().subscribe(services => {
      this.services = services;
    });
  }
}
