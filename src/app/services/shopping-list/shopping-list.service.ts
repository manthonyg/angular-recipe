import { Injectable, EventEmitter } from "@angular/core";
import { ShoppingListItem } from "../../shopping-cart/shopping-list-item/shopping-list-item.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {

  public shoppingListEvent = new EventEmitter<ShoppingListItem[]>();

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

  public setShoppingListItems(newShoppingList: ShoppingListItem[]) {
    return this._shoppingListItems = newShoppingList
  }

  public getShoppingListItems(): ShoppingListItem[] {
    return this._shoppingListItems.slice()
  }

  public addShoppingListItem(item: ShoppingListItem) {
    const newList = this.setShoppingListItems(this.getShoppingListItems().concat(item))
    this.shoppingListEvent.emit(newList)
  }

}