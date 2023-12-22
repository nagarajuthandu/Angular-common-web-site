// service-crud.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OurService } from '../../../services/our-service.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service-crud',
  templateUrl: './services.component.html',
})
export class ServiceCrudComponent implements OnInit {
  services: any[] = [];
  serviceForm: FormGroup;
  editedIndex: number | null = null;
  showForm: boolean = false;

  constructor(
    private serviceService: OurService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.serviceForm = this.fb.group({
      title: [''],
      description: [''],
      image: [''],
    });
  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/admin/login']);
    }
    this.serviceService.getServices().subscribe((services) => {
      this.services = services;
    });
  }

  openForm(): void {
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.serviceForm.reset();
    this.editedIndex = null;
  }

  addService(): void {
    const newService = this.serviceForm.value;
    this.serviceService.addService(newService);
    this.closeForm();
  }

  editService(index: number): void {
    const service = this.services[index];
    this.serviceForm.patchValue(service);
    this.editedIndex = index;
    this.openForm();
  }

  updateService(): void {
    if (this.editedIndex !== null) {
      const updatedService = this.serviceForm.value;
      this.serviceService.updateService(this.editedIndex, updatedService);
      this.closeForm();
    }
  }

  deleteService(index: number): void {
    this.serviceService.deleteService(index);
  }
}
