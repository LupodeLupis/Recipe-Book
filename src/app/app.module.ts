import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './modules/recipe-book/components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './modules/recipe-book/components/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './modules/recipe-book/components/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './modules/shopping-list/components/shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './modules/shopping-list/components/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    HeaderComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
