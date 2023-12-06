import { Routes,RouterModule } from '@angular/router';
import { EmployeeDetails } from './view-employee/view-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
   {path:'sign-up',component:SignupComponent },
  {path: 'employees', component: ListEmployeeComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetails}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
