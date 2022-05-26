import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCred } from './_Model/login-cred';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL="http://localhost:6565/login/";

  constructor(public http:HttpClient) { }
  loging(email:string,pass:string)
  {
    return this.http.post<{message: string ,token: string}>(this.baseURL,{
      "email": email,
      "password": pass,
     
    });
}
}
