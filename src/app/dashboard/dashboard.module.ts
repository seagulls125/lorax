import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { ChartsModule as chartjsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { GaugeModule } from 'angular-gauge';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    chartjsModule,
    NgxEchartsModule,
    GaugeModule.forRoot(),
    PerfectScrollbarModule
  ]
})
export class DashboardModule {}
