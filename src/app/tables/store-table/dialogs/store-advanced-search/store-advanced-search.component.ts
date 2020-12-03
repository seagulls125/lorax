import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StoreService } from '../../store.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Store } from '../../store.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-store-advanced-search',
  templateUrl: './store-advanced-search.component.html',
  styleUrls: ['./store-advanced-search.component.sass']
})
export class StoreAdvancedSearchComponent implements OnInit {

  searchForm : FormGroup;

  form : FormGroup;  
  form1 : FormGroup;

  selectedIconItem : any;

  @ViewChild('selectIcon') selectIcon; 
  getSelectedValue() { 
    if (this.selectIcon && this.selectIcon.options && this.selectIcon.options.length > 0) {
      const result = this.selectIcon.options.find( item => { return item.value === this.selectIcon.value; });
      
      if (result) return result.getLabel();
  }
     

    return ''; 
  }

  constructor(
    public dialogRef: MatDialogRef<StoreAdvancedSearchComponent>,
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
      amazon_max_price : [''],
      shipping_min_price : [''],
      shipping_max_price : [''],
      min_quantity : [''],
      max_quantity : [''],
      amazon_min_quantity : [''],
      amazon_max_quantity : [''],
      sale_rank_min : [''],
      sale_rank_max : [''],
      review : [''],
      review_count : ['']
    });
    this.form = this.fb.group({
      name: this.fb.group({
      })
    });
    this.form1 = this.fb.group({
      name1: this.fb.group({
        sales_rank_min : [''],
        sales_rank_max : [''],
        offer_count_min : [''],
        offer_count_max : [''],
        price_buybox : [''],
        price_lowest : ['']
      })
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

  ngOnInit(): void {
  }

}
