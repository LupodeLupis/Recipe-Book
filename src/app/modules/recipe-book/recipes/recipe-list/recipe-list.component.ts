import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/ingredient';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService) {
    this.recipes = [];
   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecepies()
  }
}
