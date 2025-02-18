import { Grid, GridItem, Heading, Box, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import {
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";

import NavBar from "../components/NavBar";
import Aside from "../components/Aside";
import RecipeList from "../components/RecipeList";
import AsideToggleButton from "../components/AsideToggleButton";
import { Tag } from "../hooks/useRecipes";

const HomeLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<Tag[]>([]);
  const [selectedDiet, setSelectedDiet] = useState<Tag | null>(null);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const showAside = useBreakpointValue({ base: isOpen, lg: true });

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
        <RecipeList
          selectedCategory={selectedCategory}
          selectedIngredients={selectedIngredients}
          selectedDiet={selectedDiet}
        />
      </GridItem>
    </Grid>
  );
};

export default HomeLayout;
