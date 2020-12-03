import { Component, OnInit, Inject } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.sass']
})
export class CreditComponent implements OnInit {

  searchForm : FormGroup;
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  creditForm : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder
  ) {
    // Set the defaults
    this.initForm();
    this.initCreditForm();
  }

  ngOnInit(): void {
  }

  private initForm(){
    this.searchForm = this.fb.group({
      name : [''],
      address1 : [''],
      address2 : [''],
      city : [''],
      country : [''],
      post : [''],
      state : ['']
    });
  }

  private initCreditForm(){
    this.creditForm = this.fb.group({
      card_number : [''],
      expire_date : [''],
      cvc : ['']
    })
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
