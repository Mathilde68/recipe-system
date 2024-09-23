import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import * as React from "react";
import RecipeList from "./components/RecipeList";
import NavBar from "./components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav"
           "aside main"`

      }}
      templateColumns={{
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem area={"aside"}></GridItem>

      <GridItem area={"main"}>
        <RecipeList />
      </GridItem>
    </Grid>
  );
}
export default App;
