import { Injectable } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe-book/recipe/recipe.model";

@Injectable({providedIn: 'root'})
export class RecipesService {

  public recipeSelectedEvent = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe(
      {
        name: 'Chicken Soup',
        description: 'A delicious soup', 
        time: '20 minutes', 
        imagePath: 'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg'
      }),
    new Recipe(
      {
        name: 'Beef Stroganof',
        description: 'What a delicious meaty thing', 
        time: '75 minutes', 
        imagePath: 'www.example.com/image.png'
      })
  ];

  /**
   * 
   * @param recipes an array of Recipe models
   */
  private _setRecipes(recipes: Recipe[]): void {
    this._recipes = recipes
  }

  getRecipes(): Recipe[] {
    // using slice will make a copy instead of being able to change the referenced recipes object
    return this._recipes.slice();
  }

  deleteRecipe(recipeName: string): void {
    const newRecipeList = this.getRecipes().filter(recipe => recipe?.name !== recipeName) 
    this._setRecipes(newRecipeList)
  }

  updateRecipe(newRecipe: Recipe): void {
    const currentRecipes = this.getRecipes()
    const newRecipeList = [...currentRecipes, newRecipe]
    this._setRecipes(newRecipeList)
  }
}