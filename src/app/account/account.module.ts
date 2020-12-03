import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PreferenceComponent } from './preference/preference.component';

import {TablesModule} from '../tables/tables.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BillsComponent } from './bills/bills.component';
import { PricesComponent } from './prices/prices.component';
import { MwsComponent } from './mws/mws.component';

import {MatDialogModule} from '@angular/material/dialog';
import { CreditComponent } from './bills/dialog/credit/credit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatStepperModule } from '@angular/material/stepper';
import { NotificationComponent } from './notification/notification.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [ProfileComponent, PreferenceComponent, BillsComponent, PricesComponent, MwsComponent, CreditComponent, NotificationComponent, FilterComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    TablesModule,
    MatDialogModule,
    MatDatepickerModule,
    MatStepperModule
  ]
})
export class AccountModule { }
