import { Injectable, EventEmitter } from "@angular/core";
import { ShoppingListItem } from "../../shopping-cart/shopping-list-item/shopping-list-item.model";
import { Subject } from "rxjs";
@Injectable({providedIn: 'root'})
export class ShoppingListService {

  public shoppingListEvent = new Subject<ShoppingListItem[]>();

  private _shoppingListItems: ShoppingListItem[] = [
    new ShoppingListItem(
      {
        name: 'Chicken',
        calories: 33
      }),
    new ShoppingListItem(
      {
        name: 'Spinach',
        calories: 22
      })
  ];

  private _setShoppingListItems(newShoppingList: ShoppingListItem[]) {
    return this._shoppingListItems = newShoppingList
  }

  private _getShoppingListItems(): ShoppingListItem[] {
    return this._shoppingListItems.slice()
  }

  public addShoppingListItem(item: ShoppingListItem) {
    const newList = this._setShoppingListItems(this._getShoppingListItems().concat(item))
    this.shoppingListEvent.next(newList)
  }

}