import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from 'src/app/core/models/recipe';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  randomRecipes!: Recipe[];
  favoritesRecipes: Recipe[] = [];
  loadData: boolean = false;
  searchKeyword: string = '';
  paginationButtons: number[] = [];
  totalResults: number = 0;
  numberPerPage: number = 10;
  currentPage: number = 0;
  displayedPaginationButtons: any[] = [];
  constructor(private recipeService: RecipeService, private searchService: SearchService) { }
  ngOnInit(): void {
    this.getRandomRecipes();
    this.searchService.searchList.subscribe({
      next: (response) => {
        this.randomRecipes = response.results
      }
    })
    this.searchService.searchKeyword.subscribe(keyword => {
      this.searchKeyword = keyword;
    });
  }
  getRandomRecipes(): void {
    this.recipeService.getRandomRecipes().subscribe({
      next: (response) => {
        this.randomRecipes = response.recipes;
        this.loadData = true;
        if (this.searchKeyword! = '') {
          this.searchRecipes(1);
        }
      },
      error: (error) => {
        console.log("error", error)
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
  searchRecipes(offset: number): void {
    this.searchService.searchForRecipes(this.searchKeyword, offset).subscribe({
      next: (response) => {
        this.randomRecipes = response.results;
        this.totalResults = response.totalResults;
        this.generatePaginationButtons();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  generatePaginationButtons(): void {
    const numPages = Math.ceil(this.totalResults / this.numberPerPage);
    this.paginationButtons = Array.from({ length: numPages }, (_, index) => index);
    const maxDisplayedButtons = 6;
    let start = 0;
    let end = Math.min(maxDisplayedButtons, this.paginationButtons.length);

    if (this.currentPage > maxDisplayedButtons / 2) {
      start = this.currentPage - Math.floor(maxDisplayedButtons / 2);
      end = Math.min(start + maxDisplayedButtons, this.paginationButtons.length);
    }

    if (this.currentPage >= this.paginationButtons.length - Math.floor(maxDisplayedButtons / 2)) {
      start = this.paginationButtons.length - maxDisplayedButtons;
      end = this.paginationButtons.length;
    }

    this.displayedPaginationButtons = [...Array.from({ length: start }, (_, index) => index + 1), '...', ...Array.from({ length: end - start }, (_, index) => start + index + 1)];
  }

  goToPage(pageNum: any): void {
    this.currentPage = pageNum;
    const offset = pageNum * this.numberPerPage;
    this.searchRecipes(offset);
  }

  trackByFn(index: number, item: Recipe): number {
    return item.id;
  }
}
