import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Website/menu/home/home.component';
import { AboutComponent } from './Website/menu/about/about.component';
import { ServicesListComponent } from './widgets/services-list/services.component';
import { ContactUsComponent } from './Website/menu/contact-us/contact-us.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './Website/sections/navigation/navigation.component';
import { CarouselComponent } from './widgets/carousel/carousel.component';
import { ProductListComponent } from './widgets/products-list/product-list.component';
import { TopBarComponent } from './Website/sections/top-bar/top-bar.component';
import { FooterComponent } from './Website/sections/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { ProductCrudComponent } from './Admin/crud/product/product-crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Admin/login/login.component';
import { FormsModule } from '@angular/forms'
import { SessionService } from './services/session.service';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { LeftNavComponent } from './Admin/left-nav/left-nav.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ServiceCrudComponent } from './Admin/crud/services/services.component';
import { ToggleButtonComponent } from './widgets/toggle-button/toggle-button.component';
import { WidgetsPageComponent } from './widgets/widgets-page/widgets-page.component';
import { ParagraphComponent } from './widgets/paragraph/paragraph.component';
import { HeadingComponent } from './widgets/heading/heading.component';
import { SubHeadingComponent } from './widgets/sub-heading/sub-heading.component';
import { ImageComponent } from './widgets/image/image.component';
import { ContactFormComponent } from './widgets/contact-form/contact-form.component';
import { ServicesComponent } from './Website/menu/services/services.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesListComponent,
    ContactUsComponent,
    NavigationComponent,
    CarouselComponent,
    ProductListComponent,
    TopBarComponent,
    FooterComponent,
    PageComponent,
    ProductCrudComponent,
    LoginComponent,
    AdminPageComponent,
    LeftNavComponent,
    DashboardComponent,
    ServiceCrudComponent,
    ToggleButtonComponent,
    WidgetsPageComponent,
    ParagraphComponent,
    HeadingComponent,
    SubHeadingComponent,
    ImageComponent,
    ContactFormComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
