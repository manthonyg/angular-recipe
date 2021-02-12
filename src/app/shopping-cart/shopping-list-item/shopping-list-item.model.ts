export class ShoppingListItem {
  public name: string;
  public calories: number;

  constructor(shoppingListItemKwargs: object) {
    return Object.assign(this, shoppingListItemKwargs)
  }
}