import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../models/ingredient';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe[];
  @Output() selectRecipe: EventEmitter<void>;

  constructor() {
    this.selectRecipe = new EventEmitter<void>();
   }

  ngOnInit() {
  }

  selectedRecipe() {
    this.selectRecipe.emit();
  }

}
