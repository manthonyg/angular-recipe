import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  recipeName: string = '';
  recipeDescription: string = '';
  recipeTime: string = '';
  recipeDirections: string = '';
  recipeImagePath: string = '';

  @Output() recipeCreatedEvent = new EventEmitter<{recipeName: string, recipeDescription: string, recipeTime: string, recipeDirections: string, recipeImagePath: string}>();

  constructor() { }

  ngOnInit(): void { }

  onAddRecipe() {
    this.recipeCreatedEvent.emit({
      recipeName: this.recipeName,
      recipeDescription: this.recipeDescription,
      recipeTime: this.recipeTime,
      recipeDirections: this.recipeDirections,
      recipeImagePath: this.recipeImagePath
    })
    this.recipeName = '';
    this.recipeDescription = '';
    this.recipeTime = '';
    this.recipeDirections = '';
    this.recipeImagePath = '';
  }

}
