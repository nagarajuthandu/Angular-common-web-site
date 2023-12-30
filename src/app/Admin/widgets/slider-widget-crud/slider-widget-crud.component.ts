import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OurService } from '../../../services/our-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-slider-widget-crud',
  templateUrl: './slider-widget-crud.component.html',
  styleUrls: ['./slider-widget-crud.component.css']
})
export class SliderWidgetCrudComponent implements OnInit {
  services: any[] = [];
  serviceForm: FormGroup;
  editedIndex: number | null = null;
  showForm: boolean = false;
  widgetId: any;
  @Input()  widget: any;

  constructor(
    private serviceService: OurService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.serviceForm = this.fb.group({
      caption: [''],
      description: [''],
      image: [''],
    });
  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/admin/login']);
    }
    this.loadServices();
  }

  loadServices(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.widget = params.get('widget');
      console.log(this.widget)
      this.serviceService.getWidget(this.widget).subscribe((widget) => {
        this.widgetId = widget[0]._id;
        this.serviceService.getServices(this.widgetId).subscribe((services) => {
          this.services = services;
        });
      });
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
    let widgetContent: any = {};
    widgetContent.widget = this.widgetId;
    widgetContent.content = this.serviceForm.value;
    this.serviceService.addService(widgetContent).subscribe(() => {
      this.loadServices();
      this.closeForm();
    });
  }

  updateService(): void {
    if (this.editedIndex !== null) {
      let updatedService = this.services[this.editedIndex]
      const serviceId = this.services[this.editedIndex]._id;
      updatedService.content = this.serviceForm.value;
      this.serviceService.updateService(serviceId, updatedService).subscribe(() => {
        this.loadServices();
        this.closeForm();
      });
    }
  }

  deleteService(serviceId: string): void {
    this.serviceService.deleteService(serviceId).subscribe(() => {
      this.loadServices();
    });
  }

  editService(index: number): void {
    const service = this.services[index];
    this.serviceForm.patchValue(service.content);
    this.editedIndex = index;
    this.openForm();
  }
}
