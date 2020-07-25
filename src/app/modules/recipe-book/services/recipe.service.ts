import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/ingredient'
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/model/ingredients';

@Injectable()
export class RecipeService { 
    selectRecipe = new EventEmitter<Recipe>();
    private recipes :Recipe[] = [{
        name: 'Test recipe',
        description: 'Test recipe description',
        imgeURL: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        ingredients: [ {name: 'bun', amount: 1}, {name: 'salt', amount:100} ]
      },
      {
        name: 'Test recipe2',
        description: 'Test recipe description2',
        imgeURL: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        ingredients: [ {name: 'oregano', amount: 100} ]

      }]

      constructor(private shoppingListService:ShoppingListService) {}

      getRecepies() {
          return this.recipes.slice()
      }

      addIngredientsToList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsToList(ingredients)
      }
}