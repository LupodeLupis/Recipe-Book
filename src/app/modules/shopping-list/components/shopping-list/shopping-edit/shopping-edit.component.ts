import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../../../../shared/model/ingredients';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameIngredientInput', {static: false}) nameIngredient: ElementRef ;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;
  @Output() addIngredient: EventEmitter<Ingredient>;
 
  constructor() {
    this.addIngredient = new EventEmitter<Ingredient>();
   }

  ngOnInit() {
  }

  addIngredients() {
    const newIngredient = {
      name: this.nameIngredient.nativeElement.value,
      amount: this.amount.nativeElement.value
    };
    this.addIngredient.emit(newIngredient);
  }


}
