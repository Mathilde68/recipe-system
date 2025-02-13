import useData from './useData';
import { fetchRecipes } from '../services/dataService';

interface Category {
  _id: number;
  name: string;
}

interface Ingredient {
  name: string;
  amount: string;
}

interface IngredientGroup {
  name: string;
  ingredients: Ingredient[];
}

interface ProcedureStep {
  name: string;
  steps: string[];
}

export interface Tag {
  _id: number;
  name: string;
}

export interface Recipe {
  _id: string;
  title: string;
  category: Category;
  image_src: string;
  ingredient_groups: IngredientGroup[];
  procedure_steps: ProcedureStep[];
  quick_info: string[];
  ingredient_tags: Tag[];
  diet_type_tags: Tag[];
  created_at: string;
  last_edited_at: string;
}

const useRecipes = () => {
  return useData<Recipe>(fetchRecipes);
};

export default useRecipes;