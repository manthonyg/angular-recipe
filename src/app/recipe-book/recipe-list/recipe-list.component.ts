import { debugOutputAstAsTypeScript, ThrowStmt } from '@angular/compiler';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe/recipe.model";
import { RecipesService } from "../../services/recipes/recipes.service";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes()

    this.recipesService.recipesSubject
    .subscribe((recipes: Recipe[]) => {
      this.recipes = recipes
    });

    this.recipesService.recipeSelectedSubject
    .subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe
    });
  }

  onRecipeDeleted(recipe: Recipe) {
    this.recipesService.deleteRecipe(recipe)
    console.log(recipe, 'deleted')
  }


}
