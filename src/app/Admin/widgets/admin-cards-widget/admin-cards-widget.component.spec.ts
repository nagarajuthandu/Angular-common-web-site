import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCardsWidgetComponent } from './admin-cards-widget.component';

describe('AdminCardsWidgetComponent', () => {
  let component: AdminCardsWidgetComponent;
  let fixture: ComponentFixture<AdminCardsWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCardsWidgetComponent]
    });
    fixture = TestBed.createComponent(AdminCardsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
