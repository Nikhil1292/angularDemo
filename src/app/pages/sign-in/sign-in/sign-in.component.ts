import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm : FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.setFormData();
  }

  setFormData() {
    this.signInForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  validLogin() {
    const signInData = this.signInForm.controls;
    const signInArr = {
      userName : signInData.userName.value,
      password : signInData.password.value,
    }
    debugger;
  }
}
