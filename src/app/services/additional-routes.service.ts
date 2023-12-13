import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdditionalRoutesService {
  constructor(private http: HttpClient) {}

  getAdditionalRoutes(): Observable<any[]> {
    return this.http.get<any[]>('/assets/data/additional-routes.json');
  }
}
