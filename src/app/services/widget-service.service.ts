import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WidgetServiceService {

  private serviceUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getAllWidget(): Observable<any[]>{
    return this.http.get<any[]>(`${this.serviceUrl}/widgets`)
  }

  getAllWidgetsContent(): Observable<any[]>{
    return this.http.get<any[]>(`${this.serviceUrl}/widget-content`)
  }

  getWidget(widget:any): Observable<any[]>{
    return this.http.get<any[]>(`${this.serviceUrl}/widgets?type=${widget}`)
  }

  getServices(widgetId:any): Observable<any[]> {
    return this.http.get<any[]>(`${this.serviceUrl}/widget-content?widget=${widgetId}`);
  }

  addService(service: any): Observable<any> {
    return this.http.post<any>(`${this.serviceUrl}/widget-content`, service);
  }

  updateService(serviceId: string, updatedService: any): Observable<any> {
    const url = `${this.serviceUrl}/widget-content/${serviceId}`;
    return this.http.put<any>(url, updatedService);
  }

  deleteService(serviceId: string): Observable<any> {
    const url = `${this.serviceUrl}/widget-content/${serviceId}`;
    return this.http.delete<any>(url);
  }
}
