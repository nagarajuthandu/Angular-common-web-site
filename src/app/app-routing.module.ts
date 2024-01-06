import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './Website/page/page.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminAddPageToMenuComponent } from './Admin/admin-add-page-to-menu/admin-add-page-to-menu.component';
import { AdminCreateWebPageComponent } from './Admin/admin-create-web-page/admin-create-web-page.component';
import { AdminWidgetsSwitchPageComponent } from './Admin/widgets/admin-widgets-switch-page/admin-widgets-switch-page.component';
import { WidgetsDashboardComponent } from './Admin/widgets/admin-widgets-dashboard/widgets-dashboard.component';

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
      { path: 'menu', component: AdminAddPageToMenuComponent },
      { path: 'create-page', component: AdminCreateWebPageComponent },
      { path: 'login', component: AdminLoginComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'widgets', component: WidgetsDashboardComponent },
      { path: 'widgets/:widget', component: AdminWidgetsSwitchPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
