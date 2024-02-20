import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { DetailsComponent } from './components/details/details.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        FavouritesComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        RecipeRoutingModule,
        SharedModule
    ]
})
export class RecipeModule { }
