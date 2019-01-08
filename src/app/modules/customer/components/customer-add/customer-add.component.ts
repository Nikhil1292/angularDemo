import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { CustomerModel } from '../../models/customer.model';

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

    this.customerForm = this.setFormData(new CustomerModel());
  }

  setFormData(customerModel: CustomerModel) {
    return this.fb.group({
      personalDetails: this.fb.group({
        firstName: [customerModel.personalDetail.firstName, [Validators.required]],
        lastName: [customerModel.personalDetail.lastName, [Validators.required]],
      }),
      address: this.fb.array([this.createAdrress(customerModel.address)])
    });
  }

  createAdrress(addressModel) {
    return this.fb.group({
      city:[addressModel.city, [Validators.required]]
    });
  }
}
