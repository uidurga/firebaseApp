import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{EmployeeService} from 'src/app/shared/employee.service';
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor( public emp:EmployeeService,public router:Router) { }

  ngOnInit(): void {
  this.emp.getEmployee()
  }


  createemp(){
    console.log(this.emp.form.value)
    this.emp.insertemployee(this.emp.form.value)
    this.router.navigate(['/emplist'])
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.emp.form.controls[controlName].hasError(errorName);
  }

}

