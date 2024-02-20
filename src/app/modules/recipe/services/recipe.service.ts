import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Recipe } from 'src/app/core/models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  constructor(private httpClient:HttpClient) { }

  getRandomRecipes():Observable<any>
  {
    let url = `${this.baseUrl}recipes/random?apiKey=${this.apiKey}&number=9`;
    return this.httpClient.get<any>(url);
  }
  getRecipeDetails(recipeId:number):Observable<Recipe>
  {
    let url = `${this.baseUrl}recipes/${recipeId}/information?apiKey=${this.apiKey}`;
    return this.httpClient.get<Recipe>(url);
  }



}
