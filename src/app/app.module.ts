import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './widgets/about/about.component';
import { ServicesComponent } from './widgets/services/services.component';
import { ContactUsComponent } from './widgets/contact-us/contact-us.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './sections/navigation/navigation.component';
import { CarouselComponent } from './sections/carousel/carousel.component';
import { ProductListComponent } from './widgets/product-list/product-list.component';
import { TopBarComponent } from './sections/top-bar/top-bar.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { ProductCrudComponent } from './Admin/product-crud/product-crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Admin/login/login.component';
import { FormsModule } from '@angular/forms'
import { SessionService } from './services/session.service';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { LeftNavComponent } from './Admin/left-nav/left-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
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
    LeftNavComponent
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
