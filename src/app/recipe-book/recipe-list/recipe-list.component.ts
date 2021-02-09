import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  @Output() recipeDeleteEvent = new EventEmitter<{
    recipeName: string
  }>();

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeDeleted(recipeName: string) {
    this.recipeDeleteEvent.emit({
      recipeName
    })
    console.log('tried to delete recipe', recipeName)
    this.recipes = this.recipes.filter(recipe => recipe?.name != recipeName)
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


  selectRecipe(selectedRecipe: Recipe) {
    this.recipeWasSelected.emit(selectedRecipe)
    this.selectedRecipe = selectedRecipe
    console.log(selectedRecipe)
  }

}
