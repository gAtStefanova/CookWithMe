import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
import { IRecipe } from './interfaces/recipe';

const apiURL=environment.apiURL
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadRecipes(){
    return this.httpClient.get<IRecipe>(`${apiURL}/recipes`)
  }

  loadRecentRecipes(limit?:number){
    return this.httpClient.get<IRecipe>(`apiURL/recipes${limit ? `?limit=${limit}`:''}`)
  }

  
}
