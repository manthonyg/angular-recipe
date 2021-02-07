export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public directions: string;
  public time: string;

  constructor(recipeKwargs: object) {
    return Object.assign(this, recipeKwargs)
  }
}