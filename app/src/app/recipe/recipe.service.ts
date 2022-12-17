import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRecipe } from '../interfaces';


const apiURL=environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

getAllRecipes(){
return this.http.get<IRecipe[]>(`${apiURL}/recipes/`);
}


getRecipe(id:string){
return this.http.get<IRecipe>(`${apiURL}/recipes/detail/${id}`);
  }

  createRecipe(title:string,imageUrl:string, description:string,prepTime:string,cookTime:string,ingredients:string){

    return this.http.post<IRecipe>(`/api/recipes/`,{title:title,imageUrl:imageUrl,description:description,prepTime:prepTime,cookTime:cookTime,ingredients:ingredients});
      }

  updateRecipe(userid:any,title:string,imageUrl:string, description:string,prepTime:string,cookTime:string,
        ingredients:string){
        return this.http.put<IRecipe>(`/api/recipes/detail/edit`,{recipeTitle:title,recipeImage:imageUrl,recipeDescription:description,recipePrepTime:prepTime,recipeCookTime:cookTime,recipeIngredients:ingredients,userid:userid});
          }

  deleteRecipe(recipeId:string){
        return this.http.delete<IRecipe>(`${apiURL}/recipes/detail/delete/${recipeId}`);
       }

  


  deleteRecipePost(repiceId:string,postId:string){
       return this.http.delete<any>(`/api/recipes/detail/${repiceId}/post/${postId}`);
          }

    }



