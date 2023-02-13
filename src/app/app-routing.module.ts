import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { CliLayoutComponent } from './layout/cli-layout/cli-layout.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    // canActivate: [ ValidarTokenGuard ],
    // canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: CliLayoutComponent,
    loadChildren: () => import('./modules/cli/cli.module').then(m => m.CliModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
