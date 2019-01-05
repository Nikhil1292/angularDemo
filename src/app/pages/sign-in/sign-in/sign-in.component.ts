import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  roles: any[] = [];
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.roles = [
      { label: 'Customer', value: 'Customer' },
      { label: 'User', value: 'User' }
    ];
    this.setFormData();
  }

  setFormData() {
    this.signInForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  validLogin() {
    const signInData = this.signInForm.controls;
    const signInArr = {
      userName: signInData.userName.value,
      password: signInData.password.value,
      role: signInData.role.value,
    }
    if (signInArr.role === 'Customer') {
      this.router.navigate(['/customers/customer-add']);
    }
    else {
      this.router.navigate(['/users']);
    }
  }
}
