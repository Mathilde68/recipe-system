import { useEffect, useState } from 'react';
import { fetchRecipes } from '../services/recipeService';

// Defining the structure of my recipe data using interfaces
interface Category {
  _id: string;
  name: string;
}

interface Ingredient {
  name: string;
  amount: string;
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
  ingredients: Ingredient[];
  procedure: string;
  quick_info: string[];
  ingredient_tags: Tag[];
  diet_type_tags: Tag[];
  created_at: string;
  last_edited_at: string;
}

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchRecipes().then((data) => setRecipes(data));
  }, []);

  return recipes;
};

export default useRecipes;