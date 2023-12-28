import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  private staticServicesUrl = 'http://127.0.0.1:3000/widgets'

  constructor(private http: HttpClient) {}

  createWidget(newPage: Page): Observable<Page> {
    return this.http.post<Page>(this.staticServicesUrl, newPage);
  }

  getWidget(page:any): Observable<any> {
    return this.http.get<any>(`${this.staticServicesUrl}?pagename=${page}`);
  }

  getWidgets(): Observable<any> {
    return this.http.get<any>(`${this.staticServicesUrl}`);
  }
 
  updateWidget(pageId: number, updatedSettings: any): Observable<any> {
    const updateUrl = `${this.staticServicesUrl}/${pageId}`; 
    return this.http.put<any>(updateUrl, updatedSettings);
  }
}
