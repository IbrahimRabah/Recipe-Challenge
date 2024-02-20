import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/core/models/recipe';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchKeyword: string = '';
  searchResult: Recipe[] = [];
  constructor(private router: Router,private searchService: SearchService) { }
  searchRecipes(): void {
    this.searchService.searchForRecipes(this.searchKeyword).subscribe({
      next: (response) => {
        this.searchResult = response
        this.searchService.searchList.next(this.searchResult);
        this.searchService.searchKeyword.next(this.searchKeyword);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
