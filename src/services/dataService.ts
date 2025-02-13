
import recipesData from '../data/recipes.json';

export const fetchRecipes = () => {

  return Promise.resolve(recipesData);
};


import categoryData from '../data/categories.json';

export const fetchCategories = () => {

  return Promise.resolve(categoryData);
};