import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://10.11.17.250:8080/api"

  constructor(private httpClient:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/Employees`)
  }
  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createEmployee`,employee);
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/getEmployeeById/${id}`)
  }
  updateEmployee(id:number,employee:Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateEmployee/${id}`, employee);
  }
  deleteEmployee(id:number):Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.baseURL}/DeleteEmployee/${id}`)
  }
  deleteAllEmployees(): Observable<Employee[]>{
    return this.httpClient.delete<Employee[]>(`${this.baseURL}/DeleteAllEmployees`)
  }
  searchEmployees(query: string): Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.baseURL}/search/${query}`)
  }
  
}
