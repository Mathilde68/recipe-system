import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeList } from './components/recipe-list/recipe-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeList,
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my_recipe_system');




  
}
