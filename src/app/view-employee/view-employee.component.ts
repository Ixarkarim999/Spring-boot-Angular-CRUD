import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class EmployeeDetails implements OnInit {
  
  ngOnInit(): void {
    
}
 
  id!: number;
  employee!: Employee;

  constructor(private route:ActivatedRoute,private employeeService:EmployeeService) {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee=data
    })
  }

}
