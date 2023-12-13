import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './widgets/about/about.component';
import { ServicesComponent } from './widgets/services/services.component';
import { ContactUsComponent } from './widgets/contact-us/contact-us.component';
import { PageComponent } from './page/page.component';
import { ProductCrudComponent } from './Admin/crud/product/product-crud.component';
import { LoginComponent } from './Admin/login/login.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ServiceCrudComponent } from './Admin/crud/services/services.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PageComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'about',
    component: PageComponent,
    children: [{ path: '', component: AboutComponent }],
  },
  {
    path: 'services',
    component: PageComponent,
    children: [{ path: '', component: ServicesComponent }],
  },
  {
    path: 'contact-us',
    component: PageComponent,
    children: [{ path: '', component: ContactUsComponent }],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [{ path: 'products', component: ProductCrudComponent }],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [{path: 'login', component: LoginComponent }],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [{path: 'dashboard', component: DashboardComponent }],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [{path: 'services', component: ServiceCrudComponent }],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
