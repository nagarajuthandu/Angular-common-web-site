import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWidgetsSwitchPageComponent } from './admin-widgets-switch-page.component';

describe('AdminWidgetsSwitchPageComponent', () => {
  let component: AdminWidgetsSwitchPageComponent;
  let fixture: ComponentFixture<AdminWidgetsSwitchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWidgetsSwitchPageComponent]
    });
    fixture = TestBed.createComponent(AdminWidgetsSwitchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
