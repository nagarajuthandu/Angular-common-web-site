import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = 'http://127.0.0.1:3000/menu'; 

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<any[]> {
    return this.http.get<any[]>(this.menuUrl);
  }

  createMenuItem(newItem: any): Observable<any> {
    return this.http.post<any>(this.menuUrl, newItem);
  }

  updateMenuItem(itemId: number, updatedItem: any): Observable<any> {
    const updateUrl = `${this.menuUrl}/${itemId}`;
    return this.http.put<any>(updateUrl, updatedItem);
  }

  deleteMenuItem(itemId: number): Observable<any> {
    const deleteUrl = `${this.menuUrl}/${itemId}`;
    return this.http.delete<any>(deleteUrl);
  }
}
