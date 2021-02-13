import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe-book/recipe/recipe.component';
import { RecipeFormComponent } from './recipe-book/recipe-form/recipe-form.component';
import { ShoppingListComponent } from "./shopping-cart/shopping-list/shopping-list.component";
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { OptionalRenderDirective } from "./directives/optionalRender/optional-render.directive";
import { ShoppingListItemComponent } from './shopping-cart/shopping-list-item/shopping-list-item.component';
import { ShoppingFormComponent } from './shopping-cart/shopping-form/shopping-form.component';
import { DropdownDirective } from "./directives/dropdown/dropdown.directive";
import { Routes, RouterModule } from "@angular/router";
import { RouterComponent } from './router/router/router.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeFormComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    OptionalRenderDirective,
    ShoppingListItemComponent,
    ShoppingFormComponent,
    DropdownDirective,
    RouterComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
