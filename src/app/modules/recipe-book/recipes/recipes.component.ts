import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/ingredient';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSelectedFromUser: Recipe;

  constructor() { }

  ngOnInit() {
  }
}
