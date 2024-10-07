import { useState } from "react";
import reactLogo from "./assets/react.svg";
import * as React from "react";
import RecipeList from "./components/RecipeList";
import NavBar from "./components/NavBar";
import { Center, Grid, GridItem, Heading, useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode } = useColorMode(); 
  return (
    <Grid
    templateAreas={{
      lg: `"nav nav"
           "aside main"`,
      base: `"nav" "main"`,
    }}
    templateColumns={{
      lg: "200px 1fr",
      base: "1fr",
    }}
  >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem area={"aside"}  bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"} height={"100vh"}></GridItem>

      <GridItem area={"main"}>
      <Heading size="lg" textAlign={"center"}>Cakes & Sweets recipes </Heading>
        <RecipeList />
      </GridItem>
    </Grid>
  );
}
export default App;
