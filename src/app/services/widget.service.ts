import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page.model';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  private servieURl = environment.apiUrl

  constructor(private http: HttpClient) {}

  createWidget(newPage: Page): Observable<Page> {
    return this.http.post<Page>(`${this.servieURl}/widgets`, newPage);
  }

  getWidget(page:any): Observable<any> {
    return this.http.get<any>(`${this.servieURl}/widgets?pagename=${page}`);
  }

  getWidgets(): Observable<any> {
    return this.http.get<any>(`${this.servieURl}/widgets`);
  }
 
  updateWidget(pageId: number, updatedSettings: any): Observable<any> {
    const updateUrl = `${this.servieURl}/widgets${pageId}`; 
    return this.http.put<any>(updateUrl, updatedSettings);
  }

  getWidgetsWithContent(): Observable<any> {
    return this.http.get<any>(`${this.servieURl}/widget-content`);
  }
}
