import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() activeStep;
  @Input() customerFormData;
  constructor() { }

  ngOnInit() {
  }

  clickPrev() {
    this.activeStep.index = 0;
  }

  clickNext() {
    this.activeStep.index = 2;
  }
}
