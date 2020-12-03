import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { KeywordBlackService } from '../../keyword-black.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { KeywordBlack } from '../../keyword-black.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-keyword-form',
  templateUrl: './keyword-form.component.html',
  styleUrls: ['./keyword-form.component.sass']
})
export class KeywordFormComponent implements OnInit {

  action: string;
  dialogTitle: string;
  keywordBlackForm: FormGroup;
  keywordBlack: KeywordBlack;
  constructor(
    public dialogRef: MatDialogRef<KeywordFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public keywordBlackService: KeywordBlackService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle =
        data.keywordBlack.fName + ' ' + data.keywordBlack.lName;
      this.keywordBlack = data.keywordBlack;
    } else {
      this.dialogTitle = 'New Record';
      this.keywordBlack = new KeywordBlack({});
    }
    this.keywordBlackForm = this.createContactForm();
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
      id: [this.keywordBlack.id],
      img: [this.keywordBlack.img],
      fName: [this.keywordBlack.fName, [Validators.required]],
      lName: [this.keywordBlack.lName, [Validators.required]],
      email: [
        this.keywordBlack.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      gender: [this.keywordBlack.gender],
      bDate: [
        formatDate(this.keywordBlack.bDate, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      address: [this.keywordBlack.address],
      mobile: [this.keywordBlack.mobile, [Validators.required]],
      country: [this.keywordBlack.country]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.keywordBlackService.addKeywordBlack(
      this.keywordBlackForm.getRawValue()
    );
  }

  ngOnInit(): void {
  }

}
