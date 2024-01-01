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
  services: any;
  contents:any[]=[];
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
      this.serviceService.getWidget(this.widget).subscribe((widget) => {
        this.widgetId = widget[0]._id;
        this.serviceService.getServices(this.widgetId).subscribe((services) => {
          this.services = services[0];
          this.contents=this.services.content
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
    const widgetContent: any = {
      widget: this.widgetId,
      content: [this.serviceForm.value]
    };
    this.serviceService.addService(widgetContent).subscribe(() => {
      this.loadServices();
      this.closeForm();
    });
  }

  addSlide(): void {
      this.contents.push(this.serviceForm.value);
      const widgetContent: any = {
        widget: this.widgetId,
        content: this.contents
      };
      this.serviceService.updateService(this.services._id, widgetContent).subscribe(() => {
        this.loadServices();
        this.closeForm();
      });
    
  }

  updateService(): void {
    if (this.editedIndex !== null) {
      this.contents[this.editedIndex]=this.serviceForm.value;
      const widgetContent: any = {
        widget: this.widgetId,
        content: this.contents
      };
      this.serviceService.updateService(this.services._id, widgetContent).subscribe(() => {
        this.loadServices();
        this.closeForm();
      });
    }
  }

  deleteService(serviceId: any): void {
    this.contents.splice(serviceId, 1);
    const widgetContent: any = {
      widget: this.widgetId,
      content: this.contents
    };
    this.serviceService.updateService(this.services._id, widgetContent).subscribe(() => {
      this.loadServices();
      this.closeForm();
    });
  }

  editService(index: number): void {
    const content = this.contents[index];
    this.serviceForm.patchValue(content);
    this.editedIndex = index;
    this.openForm();
  }
}
