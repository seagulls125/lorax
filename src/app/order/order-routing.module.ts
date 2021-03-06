import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main/main.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path : 'detail',
    component : DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
