import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './Website/page/page.component';
import { ProductCrudComponent } from './Admin/crud/product/product-crud.component';
import { LoginComponent } from './Admin/login/login.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ServiceCrudComponent } from './Admin/crud/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: ':page',
    component: PageComponent,
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
