import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() currentlySelectedRecipe: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }

}