import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeComponent } from './components/employe/employe.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyemailComponent } from './components/verifyemail/verifyemail.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'emplist',
    component:EmployeelistComponent
  },
  {
    path:'employe',
    component:EmployeComponent
  },
  {
    path:'verify-email',
    component:VerifyemailComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myrouting=[
  LoginComponent,
  RegisterComponent,
  DashboardComponent
]
