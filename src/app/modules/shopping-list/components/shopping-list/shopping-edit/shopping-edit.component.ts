import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameIngredientInput', {static: false}) nameIngredient: ElementRef ;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;
 
  constructor(
    private shoppinigListSerivice: ShoppingListService
  ) {
   }

  ngOnInit() {
  }

  addIngredients() {
    const newIngredient = {
      name: this.nameIngredient.nativeElement.value,
      amount: this.amount.nativeElement.value
    };
    this.shoppinigListSerivice.addNewIngredient(newIngredient)
  }


}
