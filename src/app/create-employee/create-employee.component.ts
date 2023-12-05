import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
   ngOnInit(): void {
   
  }

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {
    
  }
  
  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
     
      this.goToEmployeeList();
      
    })
  }
  
  goToEmployeeList() {
    this.router.navigate(['/employees'])
  }

  onSubmit(){
    console.log('onSubmit', this.employee);
    this.saveEmployee()
    console.log('saved successfully')
  }
}
