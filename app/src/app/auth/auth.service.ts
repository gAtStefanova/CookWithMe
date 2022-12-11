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

  constructor() { }
}
