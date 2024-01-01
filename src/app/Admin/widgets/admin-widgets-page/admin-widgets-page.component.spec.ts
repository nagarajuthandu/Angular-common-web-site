import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWidgetsPageComponent } from './admin-widgets-page.component';

describe('AdminWidgetsPageComponent', () => {
  let component: AdminWidgetsPageComponent;
  let fixture: ComponentFixture<AdminWidgetsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWidgetsPageComponent]
    });
    fixture = TestBed.createComponent(AdminWidgetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
