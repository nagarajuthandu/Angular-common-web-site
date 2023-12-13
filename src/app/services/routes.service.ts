// routes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  constructor(private http: HttpClient) {}

  getRoutes(): Observable<any> {
    return this.http.get('/assets/data/routes.json').pipe(
      catchError(error => {
        console.error('Error loading routes:', error);
        return [];
      })
    );
  }
}
