import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './widgets/derived/cards/cards.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from './Website/navigation/navigation.component';
import { CarouselComponent } from './widgets/derived/carousel/carousel.component';
import { TopBarComponent } from './Website/top-bar/top-bar.component';
import { FooterComponent } from './Website/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './Website/page/page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { FormsModule } from '@angular/forms'
import { SessionService } from './services/session.service';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { AdminLeftSideNavComponent } from './Admin/admin-left-side-nav/admin-left-side-nav.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ToggleButtonComponent } from './widgets/basic/toggle-button/toggle-button.component';
import { WidgetsPageComponent } from './widgets/widgets-page/widgets-page.component';
import { ParagraphComponent } from './widgets/basic/paragraph/paragraph.component';
import { HeadingComponent } from './widgets/basic/heading/heading.component';
import { SubHeadingComponent } from './widgets/basic/sub-heading/sub-heading.component';
import { ImageComponent } from './widgets/basic/image/image.component';
import { ContactFormComponent } from './widgets/derived/contact-form/contact-form.component';
import { AdminAddPageToMenuComponent } from './Admin/admin-add-page-to-menu/admin-add-page-to-menu.component';
import { AdminCreateWebPageComponent } from './Admin/admin-create-web-page/admin-create-web-page.component';
import { AdminWidgetsSwitchPageComponent } from './Admin/widgets/admin-widgets-switch-page/admin-widgets-switch-page.component';
import { WidgetsDashboardComponent } from './Admin/widgets/admin-widgets-dashboard/widgets-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavigationComponent,
    CarouselComponent,
    TopBarComponent,
    FooterComponent,
    PageComponent,
    AdminLoginComponent,
    AdminPageComponent,
    AdminLeftSideNavComponent,
    AdminDashboardComponent,
    ToggleButtonComponent,
    WidgetsPageComponent,
    ParagraphComponent,
    HeadingComponent,
    SubHeadingComponent,
    ImageComponent,
    ContactFormComponent,
    AdminAddPageToMenuComponent,
    AdminCreateWebPageComponent,
    AdminWidgetsSwitchPageComponent,
    WidgetsDashboardComponent
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
