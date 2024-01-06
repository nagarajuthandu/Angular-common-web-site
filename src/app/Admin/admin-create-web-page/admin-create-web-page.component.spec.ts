import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateWebPageComponent } from './admin-create-web-page.component';

describe('AdminCreateWebPageComponent', () => {
  let component: AdminCreateWebPageComponent;
  let fixture: ComponentFixture<AdminCreateWebPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCreateWebPageComponent]
    });
    fixture = TestBed.createComponent(AdminCreateWebPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
