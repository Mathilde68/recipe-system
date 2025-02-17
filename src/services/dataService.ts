
import recipesData from '../data/recipes.json';

export const fetchRecipes = () => {

  return Promise.resolve(recipesData);
};


import categoryData from '../data/categories.json';

export const fetchCategories = () => {

  return Promise.resolve(categoryData);
};

import ingredientData from '../data/ingredient_tags.json';

export const fetchIngredients = () => {

  return Promise.resolve(ingredientData);
};