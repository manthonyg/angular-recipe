import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe-book/recipe/recipe.model';
import { NavigationService } from "./services/navigation/navigation.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'angular-recipe';
  public currentlySelectedNavItem: string = '';
  public currentDropdown: string = '';

  constructor(private navigationService: NavigationService) {};

  ngOnInit() {
    this.navigationService.selectNavItemEvent
    .subscribe((navItem) => this.currentlySelectedNavItem = navItem)
  }
  //   @Output() currentlySelectedRecipe: Recipe;

  // private _setCurrentlySelectedNavOption(navOption: string): void {
  //   this.currentlySelectedNavOption = navOption
  // }

//   private _setCurrentlySelectedRecipe(selectedRecipe: Recipe): void {
//     this.currentlySelectedRecipe = selectedRecipe;
//     console.log(this.currentlySelectedRecipe);
//   }

//   setSelectedRecipe(selectedRecipe: Recipe): void {
//     console.log(selectedRecipe)
//     this._setCurrentlySelectedRecipe(selectedRecipe)
//   }

  // setSelectedNavOption(navOption: string) {
  //   console.log(navOption)
  //   this._setCurrentlySelectedNavOption(navOption)
  // }
}


