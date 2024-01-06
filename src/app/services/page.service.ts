import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page.model';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private servicesUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  createPage(newPage: Page): Observable<Page> {
    return this.http.post<Page>(`${this.servicesUrl}/page`, newPage);
  }

  getPage(page:any): Observable<any> {
    return this.http.get<any>(`${this.servicesUrl}/page?pagename=${page}`);
  }

  deletePage(pageId:any): Observable<any> {
    return this.http.delete<any>(`${this.servicesUrl}/page/${pageId}`);
  }

  getPages(): Observable<any> {
    return this.http.get<any>(`${this.servicesUrl}/page`);
  }
 
  updatePage(pageId: number, updatedSettings: any): Observable<any> {
    const updateUrl = `${this.servicesUrl}/page/${pageId}`; 
    return this.http.put<any>(updateUrl, updatedSettings);
  }
}
