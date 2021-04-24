import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../signUp';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    console.log("arun...........");
  }
  form=new FormGroup({
    email:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    mobileno:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmpassword:new FormControl('',Validators.required),
    role:new FormControl('',Validators.required)
  });
  user=new User();
  onSignUp(f:any): void{
    console.log("prashanna..................");
    console.log(f.get("email").value);
    this.user.email=f.get("email").value;
    this.user.username=f.get("username").value;
    this.user.mobileno=f.get("mobileno").value;
    this.user.password=f.get("password").value;
    this.user.confirmpassword=f.get("confirmpassword").value;
    this.user.role=f.get("role").value;
    console.log(this.user);
    this.userService.createUser(this.user).subscribe(data=> {});
    this.router.navigateByUrl("/dogOwnerHomeScreen");
  } 

}