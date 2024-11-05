import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './@core/guards';
import { AuthGuard } from './@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('./modules/auth/auth.module')).AuthModule,
      canActivate: [NoAuthGuard]
  },
  {
    path: 'admin',
    loadChildren: async () =>
      (await import('./modules/admin/admin.module')).AdminModule,
      canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
