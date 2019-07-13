import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminHomeComponent
      },
      {
        path: 'admin-products',
        component: ProductManagerComponent
      }
    ]
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
