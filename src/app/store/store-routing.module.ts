import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventoryComponent} from './inventory/inventory.component';
import {BestProductComponent} from './best-product/best-product.component';
import {RestrictedComponent} from './restricted/restricted.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {BulkDeleteComponent} from './bulk-delete/bulk-delete.component';
import {NewProductComponent} from './new-product/new-product.component';

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path : 'best',
    component : BestProductComponent
  },
  {
    path : 'restricted',
    component : RestrictedComponent
  },
  {
    path : 'product-detail',
    component : ProductDetailComponent
  },
  {
    path : 'bulk-delete',
    component : BulkDeleteComponent
  },
  {
    path : 'new-product',
    component : NewProductComponent
  },
  {
    path : 'best-product',
    component : BestProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
