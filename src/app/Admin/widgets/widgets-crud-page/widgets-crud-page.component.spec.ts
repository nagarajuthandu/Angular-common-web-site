import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsCrudPageComponent } from './widgets-crud-page.component';

describe('WidgetsCrudPageComponent', () => {
  let component: WidgetsCrudPageComponent;
  let fixture: ComponentFixture<WidgetsCrudPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetsCrudPageComponent]
    });
    fixture = TestBed.createComponent(WidgetsCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
