import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRecipe } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

getAllThemes(){
return this.http.get<IRecipe[]>('/api/recipes');
}
getRecentThemes(limit?:number){
  return this.http.get<IRecipe[]>(`/api/recipes?limit=5`);
  }

  getRecipe(id:string){
return this.http.get<IRecipe>(`/api/recipes/${id}`);
  }

  createRecipe(title:string,imageUrl:string, description:string,prepTime:string,cookTime:string,ingredients:string){

    return this.http.post<IRecipe>(`/api/recipes/`,{title:title,imageUrl:imageUrl,description:description,prepTime:prepTime,cookTime:cookTime,ingredients:ingredients});
      }

  updateRecipe(id:string,title:string,imageUrl:string, description:string,prepTime:string,cookTime:string,
        ingredients:string){
        return this.http.put<IRecipe>(`/api/recipes/${id}`,{recipeTitle:title,recipeImage:imageUrl,recipeDescription:description,recipePrepTime:prepTime,recipeCookTime:cookTime,recipeIngredients:ingredients});
          }

  deleteRecipe(id:string){
        return this.http.delete<IRecipe>(`/api/recipes/detail${id}`);
       }

  


  deleteRecipePost(repiceId:string,postId:string){
       return this.http.delete<any>(`/api/recipes/detail/${repiceId}/post/${postId}`);
          }

    }



