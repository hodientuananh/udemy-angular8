import {RecipeModel} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    new RecipeModel('Recipe 1', 'Shrimp', 'https://www.dinneratthezoo.com/wp-content/uploads/2018/04/garlic-butter-shrimp-3.jpg'),
    new RecipeModel('Recipe 2', 'Steak', 'https://therecipecritic.com/wp-content/uploads/2017/10/skilletgarlicbutterherbsteakpotatoes-1-of-1.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
