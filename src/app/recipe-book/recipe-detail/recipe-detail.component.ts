import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import {LoggingService} from "../../logging/logging.service";
import { ShoppingListItem } from "../../shopping-cart/shopping-list-item/shopping-list-item.model"
import { RecipesService } from 'src/app/services/recipes/recipes.service';
import { ShoppingListService } from "../../services/shopping-list/shopping-list.service";
// dependency injector 
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [LoggingService] // just the type of what service we need
})
export class RecipeDetailComponent implements OnInit {

  currentlySelectedRecipe: Recipe;

  constructor(
    private loggingService: LoggingService, 
    private recipesService: RecipesService,
    private shoppingService: ShoppingListService
    ) { }

  ngOnInit(): void {
    this.recipesService.recipeSelectedSubject.subscribe((recipe: Recipe) => {
      return this.currentlySelectedRecipe = recipe
    })
  }

  onSelectDetail(detailStatus: Event) {
  this.loggingService.logStatusChange(detailStatus)
  }

  handleAddIngredients(shoppingListItems: ShoppingListItem) {
   this.shoppingService.addShoppingListItem(shoppingListItems) 
  }

  handleDeleteRecipe(recipe: Recipe) {
    this.recipesService.deleteRecipe(recipe)
    this.currentlySelectedRecipe = null;
  }
}
