import React from 'react';
import { Box,SimpleGrid, Heading } from '@chakra-ui/react';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const recipes = useRecipes();

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 2, xl: 3 }}
      spacing={30}
      padding={10}
    >
    
      {recipes.map((recipe) => (
        
          <RecipeCard  recipe={recipe} />
       
      ))}
    </SimpleGrid>
  );
};

export default RecipeList;