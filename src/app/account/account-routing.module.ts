import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import {PreferenceComponent} from './preference/preference.component';
import {BillsComponent} from './bills/bills.component';
import {MwsComponent} from './mws/mws.component';
import {PricesComponent} from './prices/prices.component';
import {NotificationComponent} from './notification/notification.component';
import {FilterComponent} from './filter/filter.component';

const routes: Routes = [
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'preference',
    component : PreferenceComponent
  },
  {
    path : 'bills',
    component : BillsComponent
  },
  {
    path : 'mws',
    component : MwsComponent
  },
  {
    path : 'prices',
    component : PricesComponent
  },
  {
    path : 'notification',
    component : NotificationComponent
  },
  {
    path : 'filter',
    component : FilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
