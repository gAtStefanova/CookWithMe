import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [RecipesListComponent, NewRecipeComponent, RecipeDetailComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
  ],
  exports:[RecipesListComponent]
})
export class RecipeModule { }
