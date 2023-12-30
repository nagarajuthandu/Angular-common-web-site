import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderWidgetCrudComponent } from './slider-widget-crud.component';

describe('SliderWidgetCrudComponent', () => {
  let component: SliderWidgetCrudComponent;
  let fixture: ComponentFixture<SliderWidgetCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderWidgetCrudComponent]
    });
    fixture = TestBed.createComponent(SliderWidgetCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
