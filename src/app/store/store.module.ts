import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { StoreRoutingModule } from './store-routing.module';
import { InventoryComponent } from './inventory/inventory.component';

import {TablesModule} from '../tables/tables.module';
import { BestProductComponent } from './best-product/best-product.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BulkDeleteComponent } from './bulk-delete/bulk-delete.component';
import { NewProductComponent } from './new-product/new-product.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [InventoryComponent, BestProductComponent, RestrictedComponent, ProductDetailComponent, BulkDeleteComponent, NewProductComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatButtonModule,
    TablesModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonToggleModule
  ]
})
export class StoreModule { }
