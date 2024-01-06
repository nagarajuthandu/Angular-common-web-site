import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPageToMenuComponent } from './admin-add-page-to-menu.component';

describe('AdminAddPageToMenuComponent', () => {
  let component: AdminAddPageToMenuComponent;
  let fixture: ComponentFixture<AdminAddPageToMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddPageToMenuComponent]
    });
    fixture = TestBed.createComponent(AdminAddPageToMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
