import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './modules/recipe-book/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './modules/recipe-book/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './modules/recipe-book/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './modules/shopping-list/components/shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './modules/shopping-list/components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './modules/recipe-book/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    HeaderComponent,
    ShoppingEditComponent,
    RecipesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
