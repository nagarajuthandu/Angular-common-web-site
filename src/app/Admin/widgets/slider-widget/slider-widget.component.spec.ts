import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderWidgetComponent } from './slider-widget.component';

describe('SliderWidgetComponent', () => {
  let component: SliderWidgetComponent;
  let fixture: ComponentFixture<SliderWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderWidgetComponent]
    });
    fixture = TestBed.createComponent(SliderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
