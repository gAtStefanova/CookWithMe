import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {


  constructor(private ActivatedRoute:ActivatedRoute,private router:Router, private authService:AuthService){ }

  createHandler(form:NgForm):void{
if(form.invalid){return;}
    console.log(form.value);
    
  }
}


