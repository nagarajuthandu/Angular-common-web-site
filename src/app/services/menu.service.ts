import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private servieURl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.servieURl}/menu`);
  }

  createMenuItem(newItem: any): Observable<any> {
    return this.http.post<any>(`${this.servieURl}/menu`, newItem);
  }

  updateMenuItem(itemId: number, updatedItem: any): Observable<any> {
    const updateUrl = `${this.servieURl}/menu${itemId}`;
    return this.http.put<any>(updateUrl, updatedItem);
  }

  deleteMenuItem(itemId: number): Observable<any> {
    const deleteUrl = `${this.servieURl}/menu${itemId}`;
    return this.http.delete<any>(deleteUrl);
  }
}
