import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadSectionsService {
  private staticServicesUrl = 'assets/pageConfig'

  constructor(private http: HttpClient) {}

  getSections(page:any): Observable<any> {
    return this.http.get<any>(`${this.staticServicesUrl}/${page}.json`);
  }
 
}
