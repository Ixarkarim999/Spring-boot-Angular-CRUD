import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Employee} from '../employee';
import {Router} from '@angular/router';
import { EmployeeService } from '../employee.service';
import { ModalService } from '../modal.service'
import * as DataTables from 'datatables.net';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';


// import { DataTablesModule } from 'angular-datatables';




@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css',
   host: {ngSkipHydration: 'true'},
})
export class ListEmployeeComponent implements OnInit {
  searchQuery = '';
  searchResults: any[] = [];
  private searchSubject = new Subject<string>();
  p: number = 1; // current page
  employees: any = []; // your employee array
  
  
    
  ngOnInit(): void {
     this.getEmployees();
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => this.employeeService.searchEmployees(query))
      )
      .subscribe((results) => {
        this.searchResults = results;
        this.employees = results; // Assuming search results should replace all employees
        this.p = 1; // Reset pagination to the first page
      });
  }
  searchEmployees(query: string) {
    // Make a request to the server with the search query
    this.employeeService.searchEmployees(query).subscribe((data: any) => {
      this.employees = data;
    });
  }

  constructor(private employeeService: EmployeeService, private router: Router, private modalService: ModalService) {
    console.log("trggg");
    
    this.searchSubject.pipe(debounceTime(300),distinctUntilChanged(),switchMap((query)=>this.employeeService.searchEmployees(query)))
  }

  
 getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data=>this.employees = data)
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details',id])
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee',id])
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

  
  openModal() {
    this.modalService.openPopup()
  }

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchSubject.next(inputValue);
  }
 
    
}
