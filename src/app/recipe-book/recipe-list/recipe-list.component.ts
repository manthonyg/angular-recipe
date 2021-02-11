import { debugOutputAstAsTypeScript } from '@angular/compiler';
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
    this.recipesService.recipeSelectedEvent
    .subscribe((recipe: Recipe) => {
      return this.selectedRecipe = recipe
    })
  }

  onRecipeDeleted(recipeName: string) {
    this.recipesService.deleteRecipe(recipeName)
    console.log(recipeName, 'deleted')
  }

  onRecipeAdded(recipeData: {recipeName: string, recipeDescription: string, recipeTime: string, recipeDirections: string, recipeImagePath: string}) {
    this.recipes.push({
      name: recipeData?.recipeName,
      description: recipeData?.recipeDescription,
      time: recipeData?.recipeTime,
      directions: recipeData?.recipeDirections,
      imagePath: recipeData?.recipeImagePath,
    });
  }

}
