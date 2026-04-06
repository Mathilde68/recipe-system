import { inject, Injectable } from "@angular/core";
import { APIService } from "./api.service";
import { Recipe } from "../models/recipes";

@Injectable({ providedIn: 'root' })
export class RecipeService {
private api = inject(APIService);


getRecipes(){
    return this.api.get<Recipe[]>('recipes');
}

getRecipeById(_id: string){
    return this.api.get<Recipe>(`recipes/${_id}`);
}

getCategories(){}

}