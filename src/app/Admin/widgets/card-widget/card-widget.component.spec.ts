import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWidgetComponent } from './card-widget.component';

describe('CardWidgetComponent', () => {
  let component: CardWidgetComponent;
  let fixture: ComponentFixture<CardWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardWidgetComponent]
    });
    fixture = TestBed.createComponent(CardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
