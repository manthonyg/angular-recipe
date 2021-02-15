import { Component, Input, OnInit, EventEmitter, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output } from '@angular/core';
import { RecipesService } from "../../services/recipes/recipes.service";
import { Recipe } from "./recipe.model";
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
// OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() recipe: Recipe; 

  constructor(private recipesService: RecipesService) { 
    console.log('constructor method fired')
  }

  selectRecipe(selectedRecipe: Recipe) {
    this.recipesService.recipeSelectedEvent.next(selectedRecipe)
    console.log('selectedRecipe', selectedRecipe)
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges fired')
  //   console.log({changes})
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy fired')
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked fired')
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit fired')
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked fired')
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck fired')
  // }

  ngOnInit(): void {

    }
  }
