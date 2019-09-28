import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/ingredient';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  // recipes: Recipe[] = [new Recipe ("Test recipe","Test recipe description" , "https://pixabay.com/photos/food-meat-recipe-power-pork-1459693/")] /*this line use classes as model but is not suggested */
  constructor() {
    this.recipes = [];
   }

  ngOnInit() {
    console.log("ngOnInit() is called")
    this.recipes.push(
      {
        name: "Test recipe",
        description:"Test recipe description",
        imgeURL:"https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      },
      {
        name: "Test recipe2",
        description:"Test recipe description2",
        imgeURL:"https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      }
    )
  }

}
