import { ComponentFixture, TestBed } from '@angular/core/testing';

import {EmployeeDetails} from './view-employee.component';

describe('ViewEmployeeComponent', () => {
  let component: EmployeeDetails;
  let fixture: ComponentFixture<EmployeeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDetails]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
