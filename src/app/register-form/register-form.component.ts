import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
