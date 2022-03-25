import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email : string = '';
  password : string = '';
  constructor(public auth:AuthService,public snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }


  register(){
    //this.snackbar.open('successfully created')
   
    this.auth.register(this.email,this.password);
  }

}
