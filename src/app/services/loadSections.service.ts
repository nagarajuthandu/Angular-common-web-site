import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadSectionsService {
  private staticAboutContentUrl = 'assets/data/about.json';
  private staticHomeContentUrl = 'assets/data/home.json';
  private staticContactContentUrl = 'assets/data/contact.json';
  private staticServicesContentUrl = 'assets/data/services.json';

  constructor(private http: HttpClient) {}

  getHomeSections(): Observable<any> {
    return this.http.get<any>(this.staticHomeContentUrl);
  }
  getAboutUsSections(): Observable<any> {
    return this.http.get<any>(this.staticAboutContentUrl);
  }
  getContactUsSections(): Observable<any> {
    return this.http.get<any>(this.staticContactContentUrl);
  }
  getServicesSections(): Observable<any> {
    return this.http.get<any>(this.staticServicesContentUrl);
  }
 
}
