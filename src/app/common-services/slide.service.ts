import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private slidesUrl = '/assets/data/slides.json';

  constructor(private http: HttpClient) {}

  getSlides(): Observable<any[]> {
    return this.http.get<any[]>(this.slidesUrl);
  }
}
