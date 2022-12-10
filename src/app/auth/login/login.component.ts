import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private ActivatedRoute:ActivatedRoute,private router:Router, private authService:AuthService){ 
  
  }
  loginHandler(form: NgForm):void{
    if(form.invalid){ 
      return;
    }
    this.authService.user={
   username:'John'
    }as any;

    const returnUrl=this.ActivatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl])
  }
}
