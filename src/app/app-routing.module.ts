import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'recipes', pathMatch: 'full'
  },
  {
    path:'recipes',loadChildren:()=>
    import('../app/modules/recipe/recipe.module').then(
      (m)=>m.RecipeModule
    )
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
