import React from 'react';
import { Box,SimpleGrid, Heading } from '@chakra-ui/react';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from './recipeCard';

const RecipeList = () => {
  const recipes = useRecipes();

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={10}
      padding={10}
    >
      {recipes.map((recipe) => (
        
          <RecipeCard recipe={recipe} />
       
      ))}
    </SimpleGrid>
  );
};

export default RecipeList;