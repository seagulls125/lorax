import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TablesRoutingModule } from './tables-routing.module';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { AdvanceTableComponent } from './advance-table/advance-table.component';
import { FormDialogComponent } from './advance-table/dialogs/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './advance-table/dialogs/delete/delete.component';

import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatMenuModule } from '@angular/material/menu';
import { AdvanceSearchComponent } from './advance-table/dialogs/advance-search/advance-search.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CategoryBlackTableComponent } from './category-black-table/category-black-table.component';
import { CategoryFormComponent } from './category-black-table/dialogs/category-form/category-form.component';
import { CategoryDeleteComponent } from './category-black-table/dialogs/category-delete/category-delete.component';
import { KeywordBlackTableComponent } from './keyword-black-table/keyword-black-table.component';
import { KeywordDeleteComponent } from './keyword-black-table/dialogs/keyword-delete/keyword-delete.component';
import { KeywordFormComponent } from './keyword-black-table/dialogs/keyword-form/keyword-form.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { BrandPoolTableComponent } from './brand-pool-table/brand-pool-table.component';
import { BrandFormComponent } from './brand-pool-table/dialogs/brand-form/brand-form.component';
import { BrandDeleteComponent } from './brand-pool-table/dialogs/brand-delete/brand-delete.component';

import { ProductPoolTableComponent } from './product-pool-table/product-pool-table.component';
import { ProductFormComponent } from './product-pool-table/dialogs/product-form/product-form.component';
import { ProductDeleteComponent } from './product-pool-table/dialogs/product-delete/product-delete.component';

import { StoreTableComponent } from './store-table/store-table.component';
import { StoreFormComponent } from './store-table/dialogs/store-form/store-form.component';
import { StoreDeleteComponent } from './store-table/dialogs/store-delete/store-delete.component';
import { StoreAdvancedSearchComponent } from './store-table/dialogs/store-advanced-search/store-advanced-search.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryMainFormComponent } from './category-table/dialogs/category-main-form/category-main-form.component';
import { CategoryMainDeleteComponent } from './category-table/dialogs/category-main-delete/category-main-delete.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { OrderDeleteComponent } from './order-table/dialogs/order-delete/order-delete.component';
import { OrderFormComponent } from './order-table/dialogs/order-form/order-form.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { PriceFormComponent } from './price-table/dialogs/price-form/price-form.component';
import { PriceDeleteComponent } from './price-table/dialogs/price-delete/price-delete.component';

@NgModule({
  declarations: [
    BasicTableComponent,
    NgxDatatableComponent,
    MaterialTableComponent,
    AdvanceTableComponent,
    FormDialogComponent,
    DeleteDialogComponent,
    AdvanceSearchComponent,
    CategoryBlackTableComponent,
    CategoryFormComponent,
    CategoryDeleteComponent,
    KeywordBlackTableComponent,
    KeywordDeleteComponent,
    KeywordFormComponent,
    BrandPoolTableComponent,
    BrandFormComponent,
    BrandDeleteComponent,
    ProductPoolTableComponent,
    ProductFormComponent,
    ProductDeleteComponent,
    StoreTableComponent,
    StoreFormComponent,
    StoreDeleteComponent,
    StoreAdvancedSearchComponent,
    CategoryTableComponent,
    CategoryMainFormComponent,
    CategoryMainDeleteComponent,
    OrderTableComponent,
    OrderDeleteComponent,
    OrderFormComponent,
    PriceTableComponent,
    PriceFormComponent,
    PriceDeleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TablesRoutingModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MaterialFileInputModule,
    MatMenuModule,
    MatSlideToggleModule,
    PerfectScrollbarModule
  ],
  exports : [
    AdvanceTableComponent,
    CategoryBlackTableComponent,
    KeywordBlackTableComponent,
    BrandPoolTableComponent,
    ProductPoolTableComponent,
    StoreTableComponent,
    CategoryTableComponent,
    OrderTableComponent,
    PriceTableComponent
  ]
})
export class TablesModule {}
