
import recipesData from '../data/recipedb.recipes.json';

export const fetchRecipes = () => {

  return Promise.resolve(recipesData);
};


import categoryData from '../data/recipedb.categories.json';

export const fetchCategories = () => {

  return Promise.resolve(categoryData);
};

import ingredientData from '../data/recipedb.ingredient_tags.json';

export const fetchIngredients = () => {

  return Promise.resolve(ingredientData);
};

import dietData from '../data/recipedb.diet_tags.json';

export const fetchDiets = () => {

  return Promise.resolve(dietData);
};