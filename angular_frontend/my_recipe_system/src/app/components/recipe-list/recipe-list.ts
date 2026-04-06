import { Component, inject, signal } from '@angular/core';
import { RecipeService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipes';

@Component({
  selector: 'app-recipe-list',
  imports: [],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {
private recipeService = inject(RecipeService);
recipes = signal<Recipe[]>([]);

ngOnInit(): void {
  this.recipeService.getRecipes().subscribe((data) => { 
    console.log(data);
    this.recipes.set(data);}
  );
}

}
