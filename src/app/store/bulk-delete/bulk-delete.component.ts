import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bulk-delete',
  templateUrl: './bulk-delete.component.html',
  styleUrls: ['./bulk-delete.component.sass']
})
export class BulkDeleteComponent implements OnInit {

  // Form 1
  register: FormGroup;
  hide = true;
  agree = false;


  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.register = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      password: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      address: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      termcondition: [false]
    });
  }

  onRegister() {
    console.log('Form Value', this.register.value);
  }

  ngOnInit(): void {
  }

}
