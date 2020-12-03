import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        m => m.AuthenticationModule
      )
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./store/store.module').then(
        m => m.StoreModule
      )
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then(
        m => m.CategoryModule
      )
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then(
        m => m.OrderModule
      )
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then(
        m => m.AccountModule
      )
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./help/help.module').then(
        m => m.HelpModule
      )
  },
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
