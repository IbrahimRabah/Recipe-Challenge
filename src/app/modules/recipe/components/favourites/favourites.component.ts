import { Component } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  favoritesRecipes: Recipe[] = [];
  isEmpty: boolean = false;
  ngOnInit(): void {
    this.getFavoriteRecipes();
  }
  getFavoriteRecipes(): void {
    if ("favorites" in localStorage) {
      this.favoritesRecipes = JSON.parse(localStorage.getItem("favorites")!);
      let RecipesLength = this.getFavoriteRecipesLength();
      if (RecipesLength >= 0) {
        this.isEmpty = true;
      }
    }
    else {
      this.isEmpty = true;
    }
  }
  toggleFavorite(recipe: Recipe): void {
    recipe.favorite = !recipe.favorite;
    this.addToFavoriteRecipes(recipe);
  }
  addToFavoriteRecipes(event: Recipe): void {
    if ("favorites" in localStorage) {
      this.favoritesRecipes = JSON.parse(localStorage.getItem("favorites")!);
      let existIndex = this.favoritesRecipes.findIndex(item => item.id == event.id);
      if (existIndex !== -1) {
        this.favoritesRecipes.splice(existIndex, 1);
        localStorage.setItem('favorites', JSON.stringify(this.favoritesRecipes));
        this.getFavoriteRecipes();
      } else {
        this.favoritesRecipes.push(event);
        localStorage.setItem('favorites', JSON.stringify(this.favoritesRecipes));
      }
    } else {
      this.favoritesRecipes.push(event);
      localStorage.setItem('favorites', JSON.stringify(this.favoritesRecipes));
    }
  }
  getFavoriteRecipesLength(): number {
    if ('favorites' in localStorage) {
      let numberOfFavoriteRecipes = JSON.parse(localStorage.getItem('favorites')!)
      return numberOfFavoriteRecipes;
    }
    else {
      return 0
    }
  }
  trackByFn(index: number, item: Recipe): number {
    return item.id;
  }
}
