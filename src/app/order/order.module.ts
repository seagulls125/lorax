import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { MainComponent } from './main/main.component';
import {TablesModule} from '../tables/tables.module';
import { DetailComponent } from './detail/detail.component';

import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [MainComponent, DetailComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    TablesModule,
    MatSelectModule
  ]
})
export class OrderModule { }
