import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-owner',
  templateUrl: './signup-owner.component.html',
  styleUrls: ['./signup-owner.component.css']
})
export class SignupOwnerComponent implements OnInit {
  SignUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {   
    console.log("Here into on Init, signup");
    this.SignUpForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      LastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/),Validators.minLength(8),Validators.maxLength(8),]],
      pwd: ["",
      [Validators.required,
      Validators.minLength(6),
      ]
    ],
    });
  }
  SignUp() {
}
  goToOwnor(){
    this.router.navigate(["owner"])
  
  }
  goToClient(){
    this.router.navigate(["login"])
  
  }
  goToSignupClient(){
    this.router.navigate(["signup"])
  
  }

}