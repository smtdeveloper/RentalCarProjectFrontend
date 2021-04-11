import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginComponent } from '../components/login/login.component';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName:string;
  email:string
  userId:number
  roles:string
  expiration:Date

  jwtHelper:JwtHelperService = new JwtHelperService();


  apiUrl = 'https://localhost:44379/api/auth/';
  constructor(
    private httpClient:HttpClient,
    private localStorageService:LocalStorageService
    ) { 
    //  this.setUserInfo();
     this.getUserId();
    }

  login(loginModel:LoginComponent){

    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  register(registerModel:LoginComponent){

    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

  setUserName(){
    var decoded = this.decodeToken();
    var userName = Object.keys(decoded).filter(x=>x.endsWith("/name"))[0];
    this.userName = decoded[userName];
  }
  setEmail(){
    var decoded = this.decodeToken();
    var email = Object.keys(decoded).filter(x=>x.endsWith("email"))[0];
    this.email = decoded[email];
  }
  setUserId(){
    var decoded = this.decodeToken();
    var id = Object.keys(decoded).filter(x=>x.endsWith("/nameidentifier"))[0];
    this.userId = Number(decoded[id]);
  }
  setUserRole(){
    var decoded = this.decodeToken();
    var role = Object.keys(decoded).filter(x=>x.endsWith("role"))[0];
    this.roles = decoded[role];
  }
  setExpration(){
    var decoded = this.decodeToken();
    var expiration = Object.keys(decoded).filter(x=>x.startsWith("exp"))[0]
    this.expiration = decoded[expiration]
  }
   setUserInfo(){
    if (this.isAuthenticated()) {
      this.setUserName()
      this.setEmail();
      this.setUserId();
      this.setUserRole();
      this.setExpration();
    }
  }

  getUserName(){
    return this.userName
  }
  getUserId(){
   return this.userId
  }
  getEmail(){
    return this.email
  }
  getRoles(){
    return this.roles
  }
  getExpiration(){
    return this.expiration
  }

  logOut(){
    this.localStorageService.clear()
  }

  decodeToken(){
    try{
      return this.jwtHelper.decodeToken(this.localStorageService.get("Token"));
    }
    catch(Error){
        return null;
    }
  }

}
