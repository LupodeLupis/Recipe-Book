import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/ingredient';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() newRecipeSelected: EventEmitter<Recipe>;

  constructor() {
    this.recipes = [];
    this.newRecipeSelected =  new EventEmitter<Recipe>();
   }

  ngOnInit() {
    this.recipes.push(
      {
        name: 'Test recipe',
        description: 'Test recipe description',
        imgeURL: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      },
      {
        name: 'Test recipe2',
        description: 'Test recipe description2',
        imgeURL: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      }
    );
  }

  selectNewRecipe(recipe: Recipe) {
    this.newRecipeSelected.emit(recipe);
  }

}
