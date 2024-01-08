import { Component,OnInit,Input } from '@angular/core';
import { WidgetServiceService } from '../../../services/widget-service.service';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  @Input() content: any[] = [];
  @Input() widget: any[] = [];
  @Input() isWebView : boolean = false 
  services:any = this.content
  isAuthenticated:boolean = false
  widgetId: any;
  contents: any;
  showForm: boolean = false;
  serviceForm: any;
  editedIndex: number | null = null;
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
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated()
    if (this.isAuthenticated && !this.isWebView) {
      this.loadServices();
    }
    if(this.isWebView)
    {
      this.services = this.content
    }
  }
 
  loadServices(): void {
    console.log(this.widget)
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
    let widgetContent: any = {};
    widgetContent.widget = this.widgetId;
    widgetContent.content = this.serviceForm.value;
    this.serviceService.addService(widgetContent).subscribe(() => {
      this.loadServices();
      this.closeForm();
    });
  }

  addCard(): void {
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

  editService(index: any): void {
    const content = this.contents[index];
    this.serviceForm.patchValue(content);
    this.editedIndex = index;
    this.openForm();
  }

}
