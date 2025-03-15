import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }



  registerUser(user:Register):Observable<any>{
    return this.httpClient.post('/api/users',user);
  }
}
