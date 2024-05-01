import { Component, OnInit } from '@angular/core';
import {FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})
export class LoginOwnerComponent implements OnInit {

  owner:any = {};
  loginForm: FormGroup ;
  constructor(private router: Router) { }
  

  ngOnInit() {console.log("Here my data", this.owner);
  }
  goToClient(){
    this.router.navigate(["login"])
  
  }
  goToSignupClient(){
    this.router.navigate(["signup"])
  
  }
  goToSignupOwner(){
    this.router.navigate(["signupOwner"])
  }
  loginOwner(){
    if (this.owner.email.trim() !== '' && this.owner.pwd.trim() !== '') {
    this.router.navigate(["dashboard"]);
  } else {
    console.log('Invalid form. Please provide valid credentials.');}
   }

}