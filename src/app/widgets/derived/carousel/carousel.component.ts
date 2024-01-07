import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { WidgetServiceService } from 'src/app/services/widget-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() content:any
  @Input()  widget: any;
  @Input() isWebView: boolean = false
   slides: any[] = [];
   services: any;
  contents:any[]=[];
  serviceForm: FormGroup;
  editedIndex: number | null = null;
  showForm: boolean = false;
  widgetId: any;
  isAuthenticated:boolean = false
                                                                
  route: any;

   constructor(
    private authService: AuthService,
    private serviceService: WidgetServiceService,
    private fb: FormBuilder){
      this.serviceForm = this.fb.group({
        title: [''],
        description: [''],
        image: [''],
      });
    }


  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated()
    if (this.isAuthenticated) {
      this.loadServices();
    }
    this.slides = this.content;
  }

  
  loadServices(): void {
    this.serviceService.getWidget(this.widget).subscribe((widget) => {
      this.widgetId = widget[0]._id;
      this.serviceService.getServices(this.widgetId).subscribe((services) => {
        this.services = services[0];
        this.contents=this.services.content
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
