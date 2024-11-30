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
      

      <GridItem area="main">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default DefaultLayout;

