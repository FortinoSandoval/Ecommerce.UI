import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    component: HomeComponent
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
