import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Aside from '../components/Aside';
import { Heading } from "@chakra-ui/react";
import RecipeList from "../components/RecipeList"; 
import { useColorMode } from '@chakra-ui/react';
import { Tag } from '../hooks/useRecipes';



const HomeLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<Tag[]>([]);
  const [selectedDiet, setSelectedDiet] = useState<Tag | null>(null); 
  const { colorMode } = useColorMode(); 

  const showAside = useBreakpointValue({ base: false, lg: true });



  const handleIngredientSelect = (ingredient: Tag) => {
    setSelectedIngredients(prev =>
      prev.some(tag => tag._id === ingredient._id)
        ? prev.filter(tag => tag._id !== ingredient._id) // ❌ Makes sure to deselect if already selected
        : [...prev, ingredient] // Adds to array of selecte ingredients
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
      </GridItem>
      
      { showAside && (
        <GridItem area={"aside"}>
           <Aside 
            onSelectCategory={setSelectedCategory}
            onSelectIngredient={handleIngredientSelect} 
            onClearIngredients={handleClearIngredients}
            selectedIngredients={selectedIngredients}
            onSelectDiet={setSelectedDiet}
            selectedDiet={selectedDiet} // Pass the selectedDiet state
          />
        </GridItem>
      )}

      <GridItem area="main">
      <Heading textAlign={"center"}  pt={8}> Kager & Søderier opskrifter</Heading>
      <RecipeList 
      selectedCategory={selectedCategory} 
      selectedIngredients={selectedIngredients} 
      selectedDiet={selectedDiet}/>
      </GridItem>
    </Grid>
  );
};

export default HomeLayout;

