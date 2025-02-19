import useData from './useData';
import { fetchRecipes } from '../services/dataService';

// Raw data structure returned by the API
interface RawCategory {
  _id: { $oid: string };
  name: string;
}

interface RawTag {
  _id: { $oid: string };
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

interface RawRecipe {
  _id: { $oid: string };
  title: string;
  category: RawCategory;
  image_src: string;
  ingredient_groups: IngredientGroup[];
  procedure_steps: ProcedureStep[];
  quick_info: string[];
  ingredient_tags: RawTag[];
  diet_type_tags: RawTag[];
}


interface FormattedCategory {
  _id: string;
  name: string;
}



export interface Tag {
  _id: string;
  name: string;
}

export interface FormattedRecipe {
  _id: string;
  title: string;
  category: FormattedCategory;
  image_src: string;
  ingredient_groups: IngredientGroup[];
  procedure_steps: ProcedureStep[];
  quick_info: string[];
  ingredient_tags: Tag[];
  diet_type_tags: Tag[];
}

const useRecipes = () => {
  const rawRecipes = useData<RawRecipe>(fetchRecipes);

  // Format the data in the hook
  const formattedRecipes = rawRecipes.map((recipe) => ({
    ...recipe,
    _id: recipe._id.$oid,
    category: {
      ...recipe.category,
      _id: recipe.category._id.$oid,
    },
    ingredient_tags: recipe.ingredient_tags.map((tag) => ({
      ...tag,
      _id: tag._id.$oid,
    })),
    diet_type_tags: recipe.diet_type_tags.map((tag) => ({
      ...tag,
      _id: tag._id.$oid,
    })),
  }));

  return formattedRecipes;
};

export default useRecipes;