import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is  a simple test', 'https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg'),
    new RecipeModel('A Test Recipe', 'This is  a simple test', 'https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
