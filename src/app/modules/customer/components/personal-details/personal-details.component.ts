import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @Input() activeStep;
  @Input() customerFormData;
  @Input() formGroupName;

  personalDetails: any;
  constructor() { }

  ngOnInit() {
    this;
    // this.personalDetails = this.customerFormData.controls.personalDetails;
    debugger;
  }

  clickNext() {
    this.customerFormData.controls.personalDetails.value;
    // this.customerFormData.controls.personalDetails.value;
    debugger;
    this.activeStep.index = 1;
  }

}
