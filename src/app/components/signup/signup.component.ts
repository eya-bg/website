import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  SignUpForm: FormGroup;



  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {   
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
  goToSignupOwner(){
    this.router.navigate(["signupOwner"])
  }

}

