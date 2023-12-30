import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private widgetsUrl = 'http://127.0.0.1:3000/widgets';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.widgetsUrl);
  }

  addProducts(widgetData: any): Observable<any> {
    return this.http.post<any>(this.widgetsUrl, widgetData);
  }

  updateProducts(widgetId: string, updatedWidgetData: any): Observable<any> {
    const url = `${this.widgetsUrl}/${widgetId}`;
    return this.http.put<any>(url, updatedWidgetData);
  }

  deleteService(widgetId: string): Observable<any> {
    const url = `${this.widgetsUrl}/${widgetId}`;
    return this.http.delete<any>(url);
  }
}
