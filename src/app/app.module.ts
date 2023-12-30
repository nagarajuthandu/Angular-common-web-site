import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesListComponent } from './widgets/derived/services-list/services.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './Website/navigation/navigation.component';
import { CarouselComponent } from './widgets/derived/carousel/carousel.component';
import { ProductListComponent } from './widgets/derived/products-list/product-list.component';
import { TopBarComponent } from './Website/top-bar/top-bar.component';
import { FooterComponent } from './Website/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './Website/page/page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Admin/login/login.component';
import { FormsModule } from '@angular/forms'
import { SessionService } from './services/session.service';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { LeftNavComponent } from './Admin/left-nav/left-nav.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ToggleButtonComponent } from './widgets/basic/toggle-button/toggle-button.component';
import { WidgetsPageComponent } from './widgets/widgets-page/widgets-page.component';
import { ParagraphComponent } from './widgets/basic/paragraph/paragraph.component';
import { HeadingComponent } from './widgets/basic/heading/heading.component';
import { SubHeadingComponent } from './widgets/basic/sub-heading/sub-heading.component';
import { ImageComponent } from './widgets/basic/image/image.component';
import { ContactFormComponent } from './widgets/derived/contact-form/contact-form.component';
import { MenuComponent } from './Admin/menu/menu.component';
import { CreatePageComponent } from './Admin/create-page/create-page.component';
import { CardComponent } from './Admin/widgets/card/card.component';
import { WidgetsCrudPageComponent } from './Admin/widgets/widgets-crud-page/widgets-crud-page.component';
import { SliderWidgetCrudComponent } from './Admin/widgets/slider-widget-crud/slider-widget-crud.component';
@NgModule({
  declarations: [
    AppComponent,
    ServicesListComponent,
    NavigationComponent,
    CarouselComponent,
    ProductListComponent,
    TopBarComponent,
    FooterComponent,
    PageComponent,
    LoginComponent,
    AdminPageComponent,
    LeftNavComponent,
    DashboardComponent,
    ToggleButtonComponent,
    WidgetsPageComponent,
    ParagraphComponent,
    HeadingComponent,
    SubHeadingComponent,
    ImageComponent,
    ContactFormComponent,
    MenuComponent,
    CreatePageComponent,
    CardComponent,
    WidgetsCrudPageComponent,
    SliderWidgetCrudComponent
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
