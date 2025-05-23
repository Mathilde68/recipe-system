import {
  Flex,
  Text
 
} from "@chakra-ui/react";

import { useColorMode } from "@chakra-ui/react";


import useRecipes from "../../hooks/useRecipes";
import RecipeCard from "./recipeCard";
import { Tag } from "../../hooks/useRecipes";
import RecipeCardSkeleton from "./recipeCardSkeleton";

interface RecipeListProps {
  selectedCategory: string | null;
  selectedIngredients: Tag[];
  selectedDiet: Tag | null;
  searchQuery: string; 
}

const RecipeList = ({
  selectedCategory,
  selectedIngredients,
  selectedDiet,searchQuery
}: RecipeListProps) => {
const { recipes, isLoading, error } = useRecipes();



// Handler for filtering recipes based on selected category, diet and ingredients
  //makes sure that multiple ingredients can be selected
  const filteredRecipes = recipes.filter((recipe) => {
    const categoryMatch = selectedCategory ? recipe.category._id === selectedCategory : true;
    const dietMatch = selectedDiet ? recipe.diet_type_tags.some((tag) => tag._id === selectedDiet._id) : true;
    const ingredientMatch =
      selectedIngredients.length > 0
        ? selectedIngredients.some((ingredient) =>
            recipe.ingredient_tags.some((tag) => tag._id === ingredient._id)
          )
        : true;
    const searchMatch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && ingredientMatch && dietMatch && searchMatch;
  });

  if (error) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Text fontSize="xl">Der skete en fejl.</Text>
      </Flex>
    );
  }


//if loading
  if (isLoading) {
    return (
     
      <Flex wrap="wrap" justify="space-between" px={{ base: 5, md: 10 }}>
        <RecipeCardSkeleton />
        <RecipeCardSkeleton/>
        <RecipeCardSkeleton/>
        <RecipeCardSkeleton/>
        <RecipeCardSkeleton/>
        <RecipeCardSkeleton/>
     </Flex>
    );
  }
  
  return (

  
    <Flex direction="column" px={{ base: 5, md: 10 }} pb={10}>


      
      {!filteredRecipes.length ? (
        <Text fontSize="l" textAlign="center">
          Ingen opskrifter fundet
        </Text>
      ) : (
        <Flex wrap="wrap" justify="space-between">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};



export default RecipeList;
