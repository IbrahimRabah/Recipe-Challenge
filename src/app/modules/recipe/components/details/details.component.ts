import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  recipeId!: number;
  recipeDetails!: Recipe;
  favoritesRecipes: Recipe[] = [];
  loadData: boolean = false;
  instructions!:string;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }
  ngOnInit(): void {
    this.getRecipeId();
    if (this.recipeId != null || this.recipeId != '') {
      this.getRecipeDetails();
    }
    else {
      console.log("Recipes Id not Found");
    }
  }
  getRecipeId(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.recipeId = Number(param.get('id'));
    })
  }
  getRecipeDetails(): void {
    this.recipeService.getRecipeDetails(this.recipeId).subscribe({
      next: (response) => {
        this.recipeDetails = response;
        this.instructions = this.recipeDetails.instructions;
        this.loadData = true
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  toggleFavorite(recipe: Recipe): void {
    recipe.favorite = !recipe.favorite;
    this.addToFavoritesRecipes(recipe);
  }
  addToFavoritesRecipes(event: Recipe): void {
    if ("favorites" in localStorage) {
      this.favoritesRecipes = JSON.parse(localStorage.getItem("favorites")!);
      let existIndex = this.favoritesRecipes.findIndex(item => item.id == event.id);
      if (existIndex !== -1) {
        this.favoritesRecipes.splice(existIndex, 1);
        localStorage.setItem('favorites', JSON.stringify(this.favoritesRecipes));
      } else {
        this.favoritesRecipes.push(event);
        localStorage.setItem('favorites', JSON.stringify(this.favoritesRecipes));
      }
    } else {
      this.favoritesRecipes.push(event);
      localStorage.setItem('favorites', JSON.stringify(this.favoritesRecipes));
    }
  }
}
