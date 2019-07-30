import {RecipeModel} from './recipe.model';
import {Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Recipe 1',
      'Shrimp',
      'https://www.dinneratthezoo.com/wp-content/uploads/2018/04/garlic-butter-shrimp-3.jpg',
      [
        new IngredientModel('Meat', 20),
        new IngredientModel('French Fries', 20)
      ]),
    new RecipeModel(
      'Recipe 2',
      'Steak',
      'https://therecipecritic.com/wp-content/uploads/2017/10/skilletgarlicbutterherbsteakpotatoes-1-of-1.jpg',
      [
        new IngredientModel('Meat', 20),
        new IngredientModel('Burns', 30)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
