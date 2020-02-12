import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../shared/model/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor() {

   }
  ngOnInit() {
  }

  addedNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

}
