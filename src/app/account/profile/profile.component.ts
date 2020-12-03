import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  //first form
  register: FormGroup;
  hide = true;
  agree = false;

  //second form
  preference: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
    this.initPreferForm();
  }

  initForm() {
    this.register = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      password: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      address: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      termcondition: [false],
    });
  }

  initPreferForm(){
    this.preference = this.fb.group({
      store_name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      maximam_stock: ['', [Validators.required]],
      amazon_commission: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      termcondition: [false],
    })
  }

  onRegister() {
    console.log('Form Value', this.register.value);
  }

  ngOnInit(): void {
  }

}
