import { Component, OnInit } from '@angular/core';
import {EmployeeService} from 'src/app/shared/employee.service'
import {MatTableDataSource, _MatTableDataSource} from '@angular/material/table'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
listdata:MatTableDataSource<any>
  constructor(public emp:EmployeeService,public router:Router) { }
  displayedColumns: string[] = [
    'Employee Name',
    'Employee Phone Number',
    'Employee Email',
    
  ];
  ngOnInit(): void {
    this.emp.getEmployee().subscribe(list=>{
      let array = list.map(
        item => {
          return {
            $key:item.key,
            ...item.payload.val()
          }
        }
      )
      this.listdata = new MatTableDataSource(array)
    })
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
