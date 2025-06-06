import useData from '../services/useData';

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

interface Category {
  _id: string;
  name: string;
}

export interface Tag {
  _id: string;
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
}

const useRecipes = () => {
  const { data, isLoading, error } = useData<Recipe>('recipes');
  
  return { recipes: data || [], isLoading, error }; 
};

export default useRecipes;