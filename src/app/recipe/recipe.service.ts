import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root'
})

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

private recipes:Recipe[]=[
    new Recipe('Burger',
    'A hamburger with a rim of lettuce sitting on a black plate againts a black background','https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
    [
        new Ingredient('meal',1),
        new Ingredient('tomato',2)
    ]),
    new Recipe('Special fried rice',
    'Fried rice is a dish of cooked rice that has been stir-fried in a wok or a','../src/app/img/nasi goreng.jpg',
    [
        new Ingredient('rice',1),
        new Ingredient('meal',3),
        new Ingredient('egg',1)
    ]),
  ];

  getRecipes(){
      return this.recipes.slice();
  }

  addIngredientsShoppingList(ingredients: Ingredient[]){
      this.slsService.addIngredients(ingredients);
  }

  getRecipe(index:number){
      return this.recipes[index];
  }

  constructor(private slsService: ShoppingListService){}

}