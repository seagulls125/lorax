import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import {BlackListComponent} from './black-list/black-list.component';
import {BrandPoolComponent} from './brand-pool/brand-pool.component';
import {ProductPoolComponent} from './product-pool/product-pool.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path : 'black-list',
    component : BlackListComponent
  },
  {
    path : 'brand-pool',
    component : BrandPoolComponent
  },
  {
    path : 'product-pool',
    component : ProductPoolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
