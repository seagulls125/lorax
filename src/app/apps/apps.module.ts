import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppsRoutingModule } from './apps-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { SupportComponent } from './support/support.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatButtonModule } from '@angular/material/button';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule } from '@angular/material/radio';
import { TaskComponent } from './task/task.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormDialogComponent } from './calendar/dialogs/form-dialog/form-dialog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DeleteComponent } from './contacts/delete/delete.component';
import { FormComponent } from './contacts/form/form.component';

@NgModule({
  declarations: [
    CalendarComponent,
    ChatComponent,
    DragDropComponent,
    ContactGridComponent,
    SupportComponent,
    TaskComponent,
    FormDialogComponent,
    ContactsComponent,
    DeleteComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    FullCalendarModule,
    PerfectScrollbarModule,
    MatButtonModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSnackBarModule,
    DragDropModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSortModule,
    MatRadioModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MaterialFileInputModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DragulaModule.forRoot()
  ]
})
export class AppsModule {}
