import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Website/menu/home/home.component';
import { AboutComponent } from './Website/menu/about/about.component';
import { ContactUsComponent } from './Website/menu/contact-us/contact-us.component';
import { PageComponent } from './page/page.component';
import { ProductCrudComponent } from './Admin/crud/product/product-crud.component';
import { LoginComponent } from './Admin/login/login.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ServiceCrudComponent } from './Admin/crud/services/services.component';
import { ServicesComponent } from './Website/menu/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: PageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      { path: 'products', component: ProductCrudComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'services', component: ServiceCrudComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
