import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
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
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.sass']
})
export class StoreFormComponent implements OnInit {

  action: string;
  dialogTitle: string;
  storeForm: FormGroup;
  store: Store;
  constructor(
    public dialogRef: MatDialogRef<StoreFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public storeService: StoreService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle =
        data.store.fName + ' ' + data.store.lName;
      this.store = data.store;
    } else {
      this.dialogTitle = 'New Record';
      this.store = new Store({});
    }
    this.storeForm = this.createContactForm();
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
      id: [this.store.id],
      img: [this.store.img],
      fName: [this.store.fName, [Validators.required]],
      lName: [this.store.lName, [Validators.required]],
      email: [
        this.store.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      gender: [this.store.gender],
      bDate: [
        formatDate(this.store.bDate, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      address: [this.store.address],
      mobile: [this.store.mobile, [Validators.required]],
      country: [this.store.country]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.storeService.addStore(
      this.storeForm.getRawValue()
    );
  }

  ngOnInit(): void {
  }

}
