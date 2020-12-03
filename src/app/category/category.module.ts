import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { MainComponent } from './main/main.component';

import {TablesModule} from '../tables/tables.module';
import { BlackListComponent } from './black-list/black-list.component';
import { ProductPoolComponent } from './product-pool/product-pool.component';
import { BrandPoolComponent } from './brand-pool/brand-pool.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [MainComponent, BlackListComponent, ProductPoolComponent, BrandPoolComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    TablesModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class CategoryModule { }
