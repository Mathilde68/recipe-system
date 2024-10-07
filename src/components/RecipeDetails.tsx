import { Card, CardBody, Image, Heading, Text, useColorMode, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useRecipes from "../hooks/useRecipes";


const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>(); // Fetch the ID from the URL
  const recipes = useRecipes();  // Fetch all recipes (can replace with an API call later)
  
  // Find the recipe by id
  const recipe = recipes.find((recipe) => recipe._id === id);  // Correctly compare id
  
  if (!recipe) {
    return <Heading>Recipe not found</Heading>;
  }

  return (
    <Box p={4}>
      <Heading>{recipe.title}</Heading>
      
    </Box>
  );
};

export default RecipeDetails;