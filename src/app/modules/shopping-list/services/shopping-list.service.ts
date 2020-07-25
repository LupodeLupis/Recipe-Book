import { Ingredient } from 'src/app/shared/model/ingredients';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    notifyIngredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = []
    addIngredient = new EventEmitter<Ingredient>()


    addNewIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.notifyIngredientChanged.emit(this.ingredients.slice())
    }

    getIngredients() {
        return this.ingredients;
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.notifyIngredientChanged.emit(this.ingredients.slice())
    }

}