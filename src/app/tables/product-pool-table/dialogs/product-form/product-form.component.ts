import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { ProductPoolService } from '../../product-pool.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { ProductPool } from '../../product-pool.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

  ngOnInit(){}


  action: string;
  dialogTitle: string;
  productPoolForm: FormGroup;
  productPool: ProductPool;
  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public productPoolService: ProductPoolService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle =
        data.productPool.fName + ' ' + data.productPool.lName;
      this.productPool = data.productPool;
    } else {
      this.dialogTitle = 'New Record';
      this.productPool = new ProductPool({});
    }
    this.productPoolForm = this.createContactForm();
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.productPool.id],
      img: [this.productPool.img],
      fName: [this.productPool.fName, [Validators.required]],
      lName: [this.productPool.lName, [Validators.required]],
      email: [
        this.productPool.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      gender: [this.productPool.gender],
      bDate: [
        formatDate(this.productPool.bDate, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      address: [this.productPool.address],
      mobile: [this.productPool.mobile, [Validators.required]],
      country: [this.productPool.country]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.productPoolService.addProductPool(
      this.productPoolForm.getRawValue()
    );
  }
}
