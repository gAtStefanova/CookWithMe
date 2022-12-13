import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/interfaces';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 
  recipeList: IRecipe[] | null =null;

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.apiService.loadRecipes().subscribe({
      next: (value)=> {
        console.log(value);
        
       // console.log(this.recipeList);
        
       // this.recipeList=value;
         },

         error:(err)=>console.error(err)
        })  
    }
      
     
  }


