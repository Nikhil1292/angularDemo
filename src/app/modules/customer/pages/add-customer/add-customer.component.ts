import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

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
