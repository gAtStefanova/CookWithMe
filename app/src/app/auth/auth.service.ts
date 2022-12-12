import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

user:IUser |null={
  username:'John11',
  email:'test123@gmail.bg'
}as any;

get isLoggedIn(){
  return this.user !==null;
}

constructor(private http:HttpClient) { }


register(username:string,email:string,password:string,rePassword:string){
  return this.http.post<IUser>('/api/register',{username,email,password,rePassword})
}

login(email:string,password:string){
  return this.http.post<any>('/api/login',{email,password})
}

logout(){
  return this.http.post<void>('/api/logout',{})
}

getProfile(){
  return this.http.get<IUser>('/api/users/profile')

}

}
