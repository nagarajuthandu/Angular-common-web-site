import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OurService {
  private servicesUrl = '/assets/data/our-servicess.json'; // Assuming the JSON file is in the assets folder

  constructor(private http: HttpClient) {}

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(this.servicesUrl);
  }

  private services: any[] = [];

  addService(service: any): void {
    this.services.push(service);
  }

  updateService(index: number, service: any): void {
    this.services[index] = service;
  }

  deleteService(index: number): void {
    this.services.splice(index, 1);
  }
}
