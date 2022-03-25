import { Component, OnInit } from '@angular/core';
import{EmployeeService} from 'src/app/shared/employee.service'
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor( public emp:EmployeeService) { }

  ngOnInit(): void {
  this.emp.getEmployee()
  }


  createemp(){
    console.log(this.emp.form.value)
    this.emp.insertemployee(this.emp.form.value)
  }

}
