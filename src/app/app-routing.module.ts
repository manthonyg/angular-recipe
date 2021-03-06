import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { RouterComponent } from './router/router/router.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuard} from "./auth-guard.service";

const routes: Routes = [
    { path: '', component: PageNotFoundComponent },
    { path: 'recipe-list', canActivate: [AuthGuard], component: RecipeListComponent },
    { path: 'recipe-form', component: RecipeFormComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'shopping-form', component: ShoppingFormComponent },
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: 'not-found'} // catch all paths I do not know- should be last
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
