import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './Website/page/page.component';
import { LoginComponent } from './Admin/login/login.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ServiceCrudComponent } from './Admin/crud/services/services.component';
import { MenuComponent } from './Admin/menu/menu.component';
import { CreatePageComponent } from './Admin/create-page/create-page.component';

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
      { path: 'menu', component: MenuComponent },
      { path: 'create-page', component: CreatePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'widgets/:widget', component: ServiceCrudComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
