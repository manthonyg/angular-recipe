import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() currentlySelectedRecipe: Recipe;
  @Output() hello: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
