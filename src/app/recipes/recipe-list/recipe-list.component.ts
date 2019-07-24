import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel('Recipe 1', 'Shrimp', 'https://www.dinneratthezoo.com/wp-content/uploads/2018/04/garlic-butter-shrimp-3.jpg'),
    new RecipeModel('Recipe 2', 'Steak', 'https://therecipecritic.com/wp-content/uploads/2017/10/skilletgarlicbutterherbsteakpotatoes-1-of-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }

}
