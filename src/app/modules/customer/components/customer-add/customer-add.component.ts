import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  // signUpForm: FormGroup;
  items: MenuItem[];
  activeStep = { index: 0 };
  activeIndex = 0;

  constructor() { }

  ngOnInit() {
    debugger;
    this.items = [
      { label: 'Personal Details' },
      { label: 'Address' },
      { label: 'Educationx' }
    ];
  }
}
