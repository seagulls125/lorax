import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { BrandPoolService } from '../../brand-pool.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { BrandPool } from '../../brand-pool.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.sass']
})
export class BrandFormComponent implements OnInit {

  action: string;
  dialogTitle: string;
  brandPoolForm: FormGroup;
  brandPool: BrandPool;
  constructor(
    public dialogRef: MatDialogRef<BrandFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public brandPoolService: BrandPoolService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle =
        data.brandPool.fName + ' ' + data.brandPool.lName;
      this.brandPool = data.brandPool;
    } else {
      this.dialogTitle = 'New Record';
      this.brandPool = new BrandPool({});
    }
    this.brandPoolForm = this.createContactForm();
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
      id: [this.brandPool.id],
      img: [this.brandPool.img],
      fName: [this.brandPool.fName, [Validators.required]],
      lName: [this.brandPool.lName, [Validators.required]],
      email: [
        this.brandPool.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      gender: [this.brandPool.gender],
      bDate: [
        formatDate(this.brandPool.bDate, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      address: [this.brandPool.address],
      mobile: [this.brandPool.mobile, [Validators.required]],
      country: [this.brandPool.country]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.brandPoolService.addBrandPool(
      this.brandPoolForm.getRawValue()
    );
  }

  ngOnInit(): void {
  }

}
