import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Category } from '../../category.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-category-main-form',
  templateUrl: './category-main-form.component.html',
  styleUrls: ['./category-main-form.component.sass']
})
export class CategoryMainFormComponent implements OnInit {

  ngOnInit(){}

  action: string;
  dialogTitle: string;
  categoryForm: FormGroup;
  category: Category;
  constructor(
    public dialogRef: MatDialogRef<CategoryMainFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle =
        data.category.fName + ' ' + data.category.lName;
      this.category = data.category;
    } else {
      this.dialogTitle = 'New Record';
      this.category = new Category({});
    }
    this.categoryForm = this.createContactForm();
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
      id: [this.category.id],
      img: [this.category.img],
      fName: [this.category.fName, [Validators.required]],
      lName: [this.category.lName, [Validators.required]],
      email: [
        this.category.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      gender: [this.category.gender],
      bDate: [
        formatDate(this.category.bDate, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      address: [this.category.address],
      mobile: [this.category.mobile, [Validators.required]],
      country: [this.category.country]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.categoryService.addCategory(
      this.categoryForm.getRawValue()
    );
  }

}
