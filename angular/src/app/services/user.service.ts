import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../components/login';
import { User } from '../components/signUp';
import { Trainer } from '../components/trainerModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  main_url = "http://localhost:8080/api"
  constructor(
    private http: HttpClient
  ) { }

  private trainer:Trainer=new Trainer();
  
  getTrainerList():Observable<Trainer[]>{
    return this.http.get<Trainer[]>(this.main_url+"/trainer/addTrainer");
  } 
  createTrainer(trainer:Trainer):Observable<Object>{
    return this.http.post<Trainer>(this.main_url+"/trainer/createTrainer",trainer);
  }
  createUser(user:User):Observable<Object>{
    return this.http.post<User>(this.main_url+"/user/createUser",user);
  }
  createLogin(login:Login):Observable<Object>{
    return this.http.post<Login>(this.main_url+"/userLogin/createLogin",login);      
  }
  sendTrainerObjToDetailsView(trainer:Trainer):void{
    this.trainer=trainer;
  }
  get():Trainer{
    return this.trainer;
  }
}
