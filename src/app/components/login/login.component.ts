import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import{AuthService} from 'src/app/shared/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = '';
  password : string = '';

  constructor(public auth:AuthService,public snackbar:MatSnackBar,public Router:Router) { }

  ngOnInit(): void {

  }
  login(){
    //this.snackbar.open('successfully created')
   

    this.auth.login(this.email,this.password);
    // this.Router.navigate(['/emplist']);
    
  }

  signInWithGoogle() {
    console.log('hello')
    this.auth.googleSignIn();
  }



}
