import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsPageComponent } from './widgets-page.component';

describe('WidgetsPageComponent', () => {
  let component: WidgetsPageComponent;
  let fixture: ComponentFixture<WidgetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetsPageComponent]
    });
    fixture = TestBed.createComponent(WidgetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
