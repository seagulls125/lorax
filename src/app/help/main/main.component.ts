import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  // Form 1
  register: FormGroup;
  hide = true;
  agree = false;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.register = this.fb.group({
      reason: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      number: [''],
      password: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      issue: ['',[Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      support: ['', [Validators.required]],
      termcondition: [false],
      removablefile: ['']
    });
  }

  onRegister() {
    console.log('Form Value', this.register.value);
  }

  ngOnInit(): void {
  }

}
