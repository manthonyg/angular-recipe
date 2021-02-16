import { Injectable, EventEmitter } from "@angular/core";
import { ShoppingListItem } from "../../shopping-cart/shopping-list-item/shopping-list-item.model";
import { Subject } from "rxjs";

// TODO make a operator from map that can add kCal to each calories value
@Injectable({providedIn: 'root'})
export class ShoppingListService {

  public shoppingListEvent = new Subject<ShoppingListItem[]>();

  private _shoppingListItems: ShoppingListItem[] = [
    new ShoppingListItem({name: 'Pork', calories: 22})
  ];

  private _setShoppingListItems(newShoppingList: ShoppingListItem[]) {
    return this._shoppingListItems = newShoppingList
  }

  public getShoppingListItems(): ShoppingListItem[] {
    return this._shoppingListItems.slice()
  }

  public deleteShoppingListItem(item: ShoppingListItem) {
    const newList = this.getShoppingListItems().filter(shoppingItem => shoppingItem !== item)
    this._setShoppingListItems(newList)
    this.shoppingListEvent.next(newList)
  }

  public addShoppingListItem(item: ShoppingListItem) {
    const newList = this.getShoppingListItems().concat(item)
    this._setShoppingListItems(newList)
    this.shoppingListEvent.next(newList)
  }

  public addShoppingListItems(items: ShoppingListItem[]) {
    const newList = [...this.getShoppingListItems(), ...items]
    this._setShoppingListItems(newList)
    this.shoppingListEvent.next(newList)
  }

}