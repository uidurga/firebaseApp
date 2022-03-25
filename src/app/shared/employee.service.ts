import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: AngularFireList<any>;
  constructor(public _http:HttpClient,public firebase:AngularFireDatabase) { }
  form :FormGroup =new FormGroup({
    $key:new FormControl(null),
    employeename:new FormControl(''),
    empoyeeemail:new FormControl(''),
    employeephonenumber:new FormControl('')
  })

getEmployee(){
  this.employeeList = this.firebase.list('/employees')
  return this.employeeList.snapshotChanges();
}


  insertemployee(emp:any){
    this.employeeList.push({
      employeename:emp.employeename,
      empoyeeemail:emp.empoyeeemail,
      employeephonenumber:emp.employeephonenumber
    })
  }
  updateemployee(emp:any){

    this.employeeList.update(emp.$key,{
      employeename:emp.employeename,
      empoyeeemail:emp.empoyeeemail,
      employeephonenumber:emp.employeephonenumber
    })

  }
  deleeteemployee($key:string){
    this.employeeList.remove($key)
  }
}
