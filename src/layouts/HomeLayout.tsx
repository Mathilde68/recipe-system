import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Aside from '../components/Aside';
import { Heading } from "@chakra-ui/react";
import RecipeList from "../components/RecipeList";



const HomeLayout = () => {

  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
      templateColumns={{
        lg: "200px 1fr",
        base: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      
      { showAside && (
        <GridItem area={"aside"}>
          <Aside />
        </GridItem>
      )}

      <GridItem area="main">
      <Heading textAlign={"center"} >Cakes & Sweets recipe collection</Heading>
      <RecipeList />
      </GridItem>
    </Grid>
  );
};

export default HomeLayout;

