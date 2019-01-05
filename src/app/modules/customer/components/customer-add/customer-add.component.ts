import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerForm: FormGroup;
  items: MenuItem[];
  activeStep = { index: 0 };
  activeIndex = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    debugger;
    this.items = [
      { label: 'Personal Details' },
      { label: 'Address' },
      { label: 'Educationx' }
    ];

    this.customerForm = this.fb.group({
      personalDetails: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
      })
    });
  }
}
