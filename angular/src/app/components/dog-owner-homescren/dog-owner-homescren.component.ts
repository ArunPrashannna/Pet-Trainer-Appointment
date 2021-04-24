import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Trainer } from '../trainerModel';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dog-owner-homescren',
  templateUrl: './dog-owner-homescren.component.html',
  styleUrls: ['./dog-owner-homescren.component.css']
})
export class DogOwnerHomescrenComponent implements OnInit {

  public trainers:Trainer[]=[];
  constructor(private router:Router,private trainerService:UserService) { }

  ngOnInit(): void {
    this.getTrainers(); 
    
  }
  private getTrainers() {
    this.trainerService.getTrainerList().subscribe(data=> {this.trainers=data});
  }
  myFunction(trainer:Trainer):void{
    this.router.navigate(['./trainerDetailsView'],{
      queryParams:{data:JSON.stringify(trainer)}
    });
  }
}
