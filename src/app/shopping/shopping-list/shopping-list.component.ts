import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 10),
    new IngredientModel('Oranges', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }

}
