import {
  Flex,
  Text,
  Input,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import { useState, useRef } from "react";
import { useColorMode } from "@chakra-ui/react";

import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./recipeCard";
import { Tag } from "../hooks/useRecipes";

interface RecipeListProps {
  selectedCategory: number | null;
  selectedIngredients: Tag[];
  selectedDiet: Tag | null;
}

const RecipeList = ({
  selectedCategory,
  selectedIngredients,
  selectedDiet,
}: RecipeListProps) => {
  const recipes = useRecipes();
  const [searchQuery, setSearchQuery] = useState("");
  const { colorMode } = useColorMode();
  const inputRef = useRef<HTMLInputElement>(null);

  // Handler for seacrh input, detects changes in inputfield and sets the searchQuery
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handler for filtering recipes based on selected category, diet and ingredients
  //makes sure that multiple ingredients can be selected
  const filteredRecipes = recipes.filter((recipe) => {
    const categoryMatch = selectedCategory
      ? recipe.category._id === selectedCategory
      : true;
    const dietMatch = selectedDiet
      ? recipe.diet_type_tags.some((tag) => tag._id === selectedDiet._id)
      : true;
    const ingredientMatch =
      selectedIngredients.length > 0
        ? selectedIngredients.some((ingredient) =>
            recipe.ingredient_tags.some((tag) => tag._id === ingredient._id)
          )
        : true;
    const searchMatch = recipe.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return categoryMatch && ingredientMatch && dietMatch && searchMatch;
  });

  // Handle focusing on inputfield for search
  const inputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Flex direction="column" padding={{ base: 5, md: 10 }}>
      <InputGroup px={"10px"}>
        <InputLeftAddon
          bg={colorMode === "dark" ? "darkbrown.400" : "rosebrown.200"}
          onClick={inputFocus}
        >
          <FaSearch />
        </InputLeftAddon>
        <Input
          variant={"filled"}
          bg={colorMode === "dark" ? "richblack.400" : "creamwhite.500"}
          _focus={{
            bg: colorMode === "dark" ? "richblack.400" : "creamwhite.500",
          }}
          _hover={{
            bg: colorMode === "dark" ? "richblack.400" : "creamwhite.500",
          }}
          _active={{
            bg: colorMode === "dark" ? "richblack.400" : "creamwhite.500",
          }}
          border={"none"}
          fontFamily={"body"}
          _placeholder={{
            color: colorMode === "dark" ? "peachbrown.500" : "peachbrown.800",
          }}
          color={colorMode === "dark" ? "peachbrown.100" : "rosebrown.500"}
          placeholder="Søg i opskrifter..."
          ref={inputRef}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
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
