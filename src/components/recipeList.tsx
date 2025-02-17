import { Flex, Text, Input, InputLeftAddon, InputGroup} from '@chakra-ui/react';
import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { FaSearch } from "react-icons/fa";

import useRecipes from '../hooks/useRecipes';
import RecipeCard from "./recipeCard";
import { Tag } from '../hooks/useRecipes';



interface RecipeListProps {
  selectedCategory: number | null;
  selectedIngredients: Tag[]; 
}

const RecipeList = ({ selectedCategory, selectedIngredients }: RecipeListProps) => {
  const recipes = useRecipes();
  const [searchQuery, setSearchQuery] = useState('');
  const { colorMode } = useColorMode();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const categoryMatch = selectedCategory ? recipe.category._id === selectedCategory : true;
    const ingredientMatch = selectedIngredients.length > 0 
      ? selectedIngredients.some(ingredient => 
          recipe.ingredient_tags.some(tag => tag._id === ingredient._id)) 
      : true;
    const searchMatch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && ingredientMatch && searchMatch;
  });


    return (
      <Flex direction="column" padding={10}>
       


<InputGroup>
<InputLeftAddon bg={ colorMode === "dark" ? "darkbrown.400" : "rosebrown.200" }><FaSearch /></InputLeftAddon>
    <Input variant={"filled"}
    
        bg={ colorMode === "dark" ? "richblack.400" : "creamwhite.500" }
        _focus={{ bg: colorMode === "dark" ? "richblack.400" : "creamwhite.500" }}
        _hover={{ bg: colorMode === "dark" ? "richblack.400" : "creamwhite.500"}}
        _active={{ bg: colorMode === "dark" ? "richblack.400" : "creamwhite.500" }}
        border={"none"}
        fontFamily={"body"}
        _placeholder={{ color: colorMode === "dark" ? "peachbrown.500" : "peachbrown.800" }}
        color={ colorMode === "dark" ? "peachbrown.100" : "rosebrown.500" } 

        placeholder="Søg i opskrifter..."
        value={searchQuery}
        onChange={(e) => {setSearchQuery(e.target.value); }}
        mb={5}
      />
    
  </InputGroup>
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

