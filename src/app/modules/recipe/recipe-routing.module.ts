import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailsComponent } from './components/details/details.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

const routes: Routes = [
  {
    path:'',redirectTo:'recipes',pathMatch:'full'
  },
  {
    path:'recipes', component:RecipesComponent
  },
  {
    path:'recipes/:id', component:DetailsComponent
  },
  {
    path:'favorites', component:FavouritesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
