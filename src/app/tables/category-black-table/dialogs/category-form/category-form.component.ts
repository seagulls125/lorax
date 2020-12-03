import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { CategoryBlackService } from '../../category-black.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { CategoryBlack } from '../../category-black.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.sass']
})
export class CategoryFormComponent implements OnInit {

  action: string;
  dialogTitle: string;
  categoryBlackForm: FormGroup;
  categoryBlack: CategoryBlack;
  constructor(
    public dialogRef: MatDialogRef<CategoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public categoryBlackService: CategoryBlackService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle =
        data.categoryBlack.fName + ' ' + data.categoryBlack.lName;
      this.categoryBlack = data.categoryBlack;
    } else {
      this.dialogTitle = 'New Record';
      this.categoryBlack = new CategoryBlack({});
    }
    this.categoryBlackForm = this.createContactForm();
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
      id: [this.categoryBlack.id],
      img: [this.categoryBlack.img],
      fName: [this.categoryBlack.fName, [Validators.required]],
      lName: [this.categoryBlack.lName, [Validators.required]],
      email: [
        this.categoryBlack.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      gender: [this.categoryBlack.gender],
      bDate: [
        formatDate(this.categoryBlack.bDate, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      address: [this.categoryBlack.address],
      mobile: [this.categoryBlack.mobile, [Validators.required]],
      country: [this.categoryBlack.country]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.categoryBlackService.addCategoryBlack(
      this.categoryBlackForm.getRawValue()
    );
  }

  ngOnInit(): void {
  }

}
