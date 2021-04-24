import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './user-model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public loginuserFromRemote(user:UserModel):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login", user);
  }
}
