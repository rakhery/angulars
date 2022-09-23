import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageSignInComponent} from './login/pages/page-sign-in/page-sign-in.component';
import {PageNotFoundComponent} from './page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {path:'sign-in', component:PageSignInComponent},
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'page-not-found',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
