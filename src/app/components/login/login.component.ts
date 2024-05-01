import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = {};
  loginForm: FormGroup ;
  constructor(private router:Router) { }
  

  ngOnInit() {console.log("Here my data", this.user );
  }
  goToSignupClient(){
    this.router.navigate(["signup"])
  
  }
  goToSignupOwner(){
    this.router.navigate(["signupOwner"])
  }
  goToOwnor(){
    this.router.navigate(["owner"])
  
  }
  login(){
    if (this.user.email.trim() !== '' && this.user.pwd.trim() !== '') {
      this.router.navigate(["hotels"]);
    } else {
      console.log('Invalid form. Please provide valid credentials.');
    }
  }
}


  
  


