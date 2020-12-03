import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mws',
  templateUrl: './mws.component.html',
  styleUrls: ['./mws.component.sass']
})
export class MwsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;

  checked = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      checked : [this.checked]
    });
    this.thirdFormGroup = this._formBuilder.group({
      seller_id : [''],
      mws_auth_token : ['']
    })
  }

  save(){
    console.log('save');
  }

}
