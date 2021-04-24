import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Trainer } from '../trainerModel';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  public trainers:Trainer[]=[];
  constructor(private trainerService:UserService) { }

  ngOnInit(): void {
    this.getTrainers();
  }
  private getTrainers() {
    this.trainerService.getTrainerList().subscribe(data=> {this.trainers=data});
  }
}