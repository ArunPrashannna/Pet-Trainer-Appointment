import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Trainer } from '../trainerModel';

@Component({
  selector: 'app-trainer-details-view',
  templateUrl: './trainer-details-view.component.html',
  styleUrls: ['./trainer-details-view.component.css']
})
export class TrainerDetailsViewComponent implements OnInit {
  data: any;
  constructor(private route:ActivatedRoute,private router:Router,private trainerService:UserService) { }
  trainer:Trainer=this.trainerService.get();
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params)=>{
      console.log(typeof params.data);
      this.data=JSON.parse(params.data);
      }
    )
  }
}
