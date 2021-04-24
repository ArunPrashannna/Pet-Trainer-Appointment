import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Trainer } from '../trainerModel';

@Component({
  selector: 'app-trainer-adding-form',
  templateUrl: './trainer-adding-form.component.html',
  styleUrls: ['./trainer-adding-form.component.css']
})
export class TrainerAddingFormComponent implements OnInit {

  constructor(private router:Router,private userService: UserService) { }

  ngOnInit(): void {
  }
  trainer = new Trainer();
  public onSubmit(){
    this.userService.createTrainer(this.trainer).subscribe(data=> {console.log('arun')});  
    this.router.navigateByUrl('/admin');  
  }
}
