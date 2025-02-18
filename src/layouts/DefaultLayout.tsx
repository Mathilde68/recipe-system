import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';



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
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default DefaultLayout;

