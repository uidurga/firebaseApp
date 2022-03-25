import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import {FormControl,FormGroup,FormBuilder,} from '@angular/forms'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private fireauth : AngularFireAuth, private router : Router,public snackbar:MatSnackBar) { }

 

//register

register(email:any,password:any){
  this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
    this.sendEmailForVarification(res.user);
    this.snackbar.open('Registration Successful')
    this.router.navigate(['/login'])
  },err=>{
    
    this.snackbar.open(err.message)
      this.router.navigate(['/register']);
  })
}

//login

login(email:any,password:any){
  this.fireauth.signInWithEmailAndPassword(email,password).then(res=>{
    localStorage.setItem('token','true');
    if(res.user?.emailVerified == true) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['/varify-email']);
    }
  },
  err => {
    this.snackbar.open(err.message)
    this.router.navigate(['/login']);
})
}


   //sign in with google
   googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      this.snackbar.open(err.message)
    })
  }


  // email varification
  sendEmailForVarification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/verify-email']);
    }, (err : any) => {
      this.snackbar.open('Something went wrong. Not able to send mail to your email.')
      
    })
  }
}
