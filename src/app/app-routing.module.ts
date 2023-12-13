import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './widgets/about/about.component';
import { ServicesComponent } from './widgets/services/services.component';
import { ContactUsComponent } from './widgets/contact-us/contact-us.component';
import { PageComponent } from './page/page.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
