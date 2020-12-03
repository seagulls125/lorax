import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { PriceService } from '../../price.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Price } from '../../price.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.sass']
})
export class PriceFormComponent implements OnInit {

  action: string;
  dialogTitle: string;
  priceForm: FormGroup;
  price: Price;
  constructor(
    public dialogRef: MatDialogRef<PriceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public priceService: PriceService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle =
        data.price.fName + ' ' + data.price.lName;
      this.price = data.price;
    } else {
      this.dialogTitle = 'New Record';
      this.price = new Price({});
    }
    this.priceForm = this.createContactForm();
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
      id: [this.price.id],
      img: [this.price.img],
      fName: [this.price.fName, [Validators.required]],
      lName: [this.price.lName, [Validators.required]],
      email: [
        this.price.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      gender: [this.price.gender],
      bDate: [
        formatDate(this.price.bDate, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      address: [this.price.address],
      mobile: [this.price.mobile, [Validators.required]],
      country: [this.price.country]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.priceService.addPrice(
      this.priceForm.getRawValue()
    );
  }

  ngOnInit(){}

}
