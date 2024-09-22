import recipesData from '../data/recipes.json';

export const fetchRecipes = () => {
  // Simulating an API call to fetch the recipes
  return Promise.resolve(recipesData);
};