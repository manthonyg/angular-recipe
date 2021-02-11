import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import {LoggingService} from "../../logging/logging.service";
import { RecipesService } from 'src/app/services/recipes/recipes.service';
// dependency injector 
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [LoggingService] // just the type of what service we need
})
export class RecipeDetailComponent implements OnInit {

  currentlySelectedRecipe: Recipe;

  constructor(private loggingService: LoggingService, private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.recipeSelectedEvent.subscribe((recipe: Recipe) => {
      return this.currentlySelectedRecipe = recipe
    })
  }

  onSelectDetail(detailStatus: Event) {
  this.loggingService.logStatusChange(detailStatus)
  }
}
