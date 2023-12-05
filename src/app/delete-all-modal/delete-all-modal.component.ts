import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-all-modal',
  templateUrl: './delete-all-modal.component.html',
  styleUrl: './delete-all-modal.component.css'
})
export class DeleteAllModalComponent implements OnInit {
displayStyle: any;
  ngOnInit(): void {
  
  }
  constructor(private employeeService:EmployeeService,private router:Router) {} 
    openPopup() { 
    this.displayStyle = "block"; 
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 
  deleteAllEmployee() {
   
    this.employeeService.deleteAllEmployees().subscribe(data => {
      console.log('cxvc',data);
      this.router.navigate(['/employees'])
       window.location.reload();
      
    })
  }

}
