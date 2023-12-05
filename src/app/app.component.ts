import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../app/employee.service'
import {Subject, debounce, debounceTime, distinct, distinctUntilChanged, switchMap} from 'rxjs'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
pageChanged($event: number) {
throw new Error('Method not implemented.');
}

  searchQuery = ""
  searchResults: any[] = [];
  private searchSubject = new Subject<string>();
currentPage!: number;
totalPages!: number;
  
   ngOnInit(): void {
    
   }
  constructor(private service: EmployeeService) {
    this.searchSubject.pipe(debounceTime(300),distinctUntilChanged(),switchMap((query)=>this.service.searchEmployees(query)))
  }
  onSearch(): void {
    this.searchSubject.next(this.searchQuery)
  }
    
   title = 'Employee Management System';
}
