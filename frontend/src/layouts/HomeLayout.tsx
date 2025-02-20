import { Grid, GridItem, Heading, Box, IconButton, Input,
  InputLeftAddon,
  InputGroup } from "@chakra-ui/react";
  import { FaSearch } from "react-icons/fa";
import { useState, useEffect,useRef  } from "react";
import { useSearchParams } from "react-router-dom";
import {
  useDisclosure,
  useBreakpointValue,useColorMode
} from "@chakra-ui/react";

import NavBar from "../components/NavBar";
import Aside from "../components/Aside";
import RecipeList from "../components/RecipeList";
import AsideToggleButton from "../components/AsideToggleButton";
import { Tag } from "../hooks/useRecipes";
import SearchInput from "../components/SearchInput";

const HomeLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<Tag[]>([]);
  const [selectedDiet, setSelectedDiet] = useState<Tag | null>(null);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const showAside = useBreakpointValue({ base: isOpen, lg: true });
  const { colorMode } = useColorMode();


// Reading the search query from URL
  const searchQuery = searchParams.get("search") || ""; 
  // handling change in the search and setting the searchQuery
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("search", e.target.value);
    setSearchParams(newParams);
  };



    // reads the filters from URL on render (making sure filters persist)
    useEffect(() => {
      const category = searchParams.get("category");
      const ingredients = searchParams.get("ingredients");
      const diet = searchParams.get("diet");
      
  
      if (category) setSelectedCategory(category);
      if (ingredients) setSelectedIngredients(JSON.parse(ingredients));
      if (diet) setSelectedDiet(JSON.parse(diet));
    }, []);
  
    // Updating the URL when filters change, including search query
    useEffect(() => {
      const newParams = new URLSearchParams();
  
      if (searchQuery) newParams.set("search", searchQuery);
      if (selectedCategory) newParams.set("category", selectedCategory);
      if (selectedIngredients.length > 0) newParams.set("ingredients", JSON.stringify(selectedIngredients));
      if (selectedDiet) newParams.set("diet", JSON.stringify(selectedDiet));
  
      setSearchParams(newParams);
    }, [selectedCategory, selectedIngredients, selectedDiet, searchQuery]);


    

  const handleIngredientSelect = (ingredient: Tag) => {
    setSelectedIngredients(
      (prev) =>
        prev.some((tag) => tag._id === ingredient._id)
          ? prev.filter((tag) => tag._id !== ingredient._id) // ❌ Makes sure to deselect if already selected
          : [...prev, ingredient] // Adds it to my array of selecte ingredients 🧑‍🍳
    );
  };

  // Clearing the selected ingredients array
  const handleClearIngredients = () => {
    setSelectedIngredients([]);
  };



   // Handle focusing on inputfield for search
    const inputFocus = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        lg: "300px 1fr",
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />

        <AsideToggleButton isOpen={isOpen} onToggle={onToggle} />
      </GridItem>

      {/* My overlay placed behind aside, for closing when clicking oustide menu on mobile */}
      {isOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          bg="richblack.900"
          opacity={0.5}
          zIndex={1}
          onClick={onClose}
          display={{ lg: "none" }}
        />
      )}

      {showAside && (
        <GridItem area={"aside"}>
          <Aside
            onSelectCategory={setSelectedCategory}
            onSelectIngredient={handleIngredientSelect}
            onClearIngredients={handleClearIngredients}
            selectedIngredients={selectedIngredients}
            onSelectDiet={setSelectedDiet}
            selectedDiet={selectedDiet}
            isOpen={isOpen}
            selectedCategory={selectedCategory}
          />
        </GridItem>
      )}

      <GridItem mt={{ base: "6rem", lg: 8 }} area="main">
               
        <Heading textAlign={"center"} fontSize="3xl" fontWeight={300}> Thilde's</Heading>
        <Heading textAlign={"center"}> Kager & lækkerier</Heading>

        <SearchInput searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        <RecipeList
          selectedCategory={selectedCategory}
          selectedIngredients={selectedIngredients}
          selectedDiet={selectedDiet}
          searchQuery={searchQuery}
        />
      </GridItem>
    </Grid>
  );
};

export default HomeLayout;
