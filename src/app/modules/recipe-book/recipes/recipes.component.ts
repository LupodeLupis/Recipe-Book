import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/ingredient';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeSelectedFromUser: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectRecipe.subscribe( (recipe:Recipe) => {
      this.recipeSelectedFromUser = recipe
    })
  }
}
