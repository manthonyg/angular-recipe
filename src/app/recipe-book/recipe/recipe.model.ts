import { ShoppingListItem } from "../../shopping-cart/shopping-list-item/shopping-list-item.model"
export class Recipe {
  public name: string;
  public description: string;
  public ingredients: ShoppingListItem[];
  public imagePath: string;
  public directions: string;
  public time: string;

  constructor(recipeKwargs: object) {
    return Object.assign(this, recipeKwargs)
  }
}