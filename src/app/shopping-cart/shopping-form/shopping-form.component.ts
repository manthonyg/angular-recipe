import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from "../../services/shopping-list/shopping-list.service";

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit {

  public itemName: string = '';
  public itemCalories: number = 0;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  handleAddShoppingListItem(): void {
    this.shoppingListService.addShoppingListItem({name: this.itemName, calories: this.itemCalories})
    this.itemName = '';
    this.itemCalories = 0;
  }
  
  
}
