import { Injectable } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { ShoppingListItem } from 'src/app/shopping-cart/shopping-list-item/shopping-list-item.model';
import { Recipe } from "../../recipe-book/recipe/recipe.model";
import { Subject } from "rxjs";
@Injectable({providedIn: 'root'})
export class RecipesService {

  public recipeSelectedSubject = new Subject<Recipe>();
  public recipesSubject = new Subject<Recipe[]>();

  private _recipes: Recipe[] = [
    new Recipe(
      {
        name: 'Chicken Soup',
        description: 'A delicious soup', 
        time: '20 minutes', 
        ingredients: [new ShoppingListItem({name: 'apple2', calories: 100}), new ShoppingListItem({name: 'cucumber2', calories: 200})],
        imagePath: 'https://i.ytimg.com/vi/o91gT73mQhg/maxresdefault.jpg'
      }),
    new Recipe(
      {
        name: 'Beef Stroganof',
        description: 'What a delicious meaty thing',
        ingredients: [new ShoppingListItem({name: 'apple', calories: 100}), new ShoppingListItem({name: 'cucumber', calories: 200})],
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

  deleteRecipe(recipe: Recipe): void {
    const newRecipeList = this.getRecipes().filter(x => x !== recipe) 
    this._setRecipes(newRecipeList)
    this.recipesSubject.next(newRecipeList)
  }

  updateRecipe(newRecipe: Recipe): void {
    const currentRecipes = this.getRecipes()
    const newRecipeList = [...currentRecipes, newRecipe]
    this._setRecipes(newRecipeList)
    this.recipesSubject.next(newRecipeList)
  }
}