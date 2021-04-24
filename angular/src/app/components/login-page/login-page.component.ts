import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Login } from '../login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  constructor(private router:Router,private userService:UserService) { }
  
  ngOnInit(): void {
 
  }
  login:Login=new Login();
  onLogin():void{
    this.userService.createLogin(this.login).subscribe(data=>{console.log("arunprashanna")});
    this.router.navigateByUrl("/dogOwnerHomeScreen");
  }
 
} 
