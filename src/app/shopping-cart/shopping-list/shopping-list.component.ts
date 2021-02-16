import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from "../../services/shopping-list/shopping-list.service";
import { ShoppingListItem } from "../shopping-list-item/shopping-list-item.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }
  
  shoppingList: ShoppingListItem[];
  selectedShoppingListItem: ShoppingListItem;


  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingListItems()
    this.shoppingListService.shoppingListEvent
    .subscribe((shoppingList: ShoppingListItem[]) => {
      return this.shoppingList = shoppingList
    })
  }

  handleAddShoppingListItem(item: ShoppingListItem) {
    this.shoppingListService.addShoppingListItem(item)
    console.log('added', item)
  }

  handleSelectShoppingListItem(item: ShoppingListItem) {
    console.log(this.selectedShoppingListItem, item)
    this.selectedShoppingListItem = item
  }

  handleDeleteShoppingListItem(item: ShoppingListItem) {
    this.shoppingListService.deleteShoppingListItem(item)
    this.selectedShoppingListItem = null;
  }

}
