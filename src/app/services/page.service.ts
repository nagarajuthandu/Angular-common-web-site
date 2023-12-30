import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private staticServicesUrl = 'http://127.0.0.1:3000/page'

  constructor(private http: HttpClient) {}

  createPage(newPage: Page): Observable<Page> {
    return this.http.post<Page>(this.staticServicesUrl, newPage);
  }

  getPage(page:any): Observable<any> {
    return this.http.get<any>(`${this.staticServicesUrl}?pagename=${page}`);
  }

  deletePage(pageId:any): Observable<any> {
    return this.http.delete<any>(`${this.staticServicesUrl}/${pageId}`);
  }

  getPages(): Observable<any> {
    return this.http.get<any>(`${this.staticServicesUrl}`);
  }
 
  updatePage(pageId: number, updatedSettings: any): Observable<any> {
    const updateUrl = `${this.staticServicesUrl}/${pageId}`; 
    return this.http.put<any>(updateUrl, updatedSettings);
  }
}