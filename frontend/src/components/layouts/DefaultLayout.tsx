import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import { ScrollRestoration } from "react-router-dom";



const DefaultLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="nav">
      <NavBar />
      </GridItem>
      

      <GridItem mt={{base: "4rem", lg:0}} area="main">
        {/* Makes sure that it resets scroll position */}
        <ScrollRestoration /> 
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default DefaultLayout;

