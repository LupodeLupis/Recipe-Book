import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../../shared/model/ingredients';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) {

   }
  ngOnInit() {
    this.shoppingListService.notifyIngredientChanged.subscribe( (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
    })
  }

  

}
