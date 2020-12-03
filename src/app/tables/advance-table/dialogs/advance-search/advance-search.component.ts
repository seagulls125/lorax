import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdvanceTableService } from '../../advance-table.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { AdvanceTable } from '../../advance-table.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.sass'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})
export class AdvanceSearchComponent implements OnInit {


  searchForm : FormGroup;
  ngOnInit(){}
  constructor(
    public dialogRef: MatDialogRef<AdvanceSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder
  ) {
    // Set the defaults
    this.initForm();
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  private initForm(){
    this.searchForm = this.fb.group({
      category : [''],
      subcategory : [''],
      brand : [''],
      min_price : [''],
      max_price : [''],
      amazon_min_price : [''],
      amazon_max_price : ['']
    });
  }
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public search(): void {
  }
}
