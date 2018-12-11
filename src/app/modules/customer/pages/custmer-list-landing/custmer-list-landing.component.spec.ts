import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmerListLandingComponent } from './custmer-list-landing.component';

describe('CustmerListLandingComponent', () => {
  let component: CustmerListLandingComponent;
  let fixture: ComponentFixture<CustmerListLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustmerListLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmerListLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
