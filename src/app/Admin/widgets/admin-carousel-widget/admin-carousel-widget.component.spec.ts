import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarouselWidgetComponent } from './admin-carousel-widget.component';

describe('AdminCarouselWidgetComponent', () => {
  let component: AdminCarouselWidgetComponent;
  let fixture: ComponentFixture<AdminCarouselWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCarouselWidgetComponent]
    });
    fixture = TestBed.createComponent(AdminCarouselWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
