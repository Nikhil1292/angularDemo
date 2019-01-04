import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // signUpForm: FormGroup;
  items: MenuItem[];
  activeStep = { index: 0 };
  activeIndex = 0;

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Personal Details' },
      { label: 'Address' },
      { label: 'Educationx' }
    ];
  }

}
