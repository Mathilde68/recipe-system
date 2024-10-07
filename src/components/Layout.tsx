import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Aside from "./Aside";  // Import Aside component



const Layout = () => {

  const location = useLocation();
const isHomePage = location.pathname === "/";  // Check if page is the home page
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
      
      <GridItem area={"nav"}>
        <NavBar/>
      </GridItem>


      
      {isHomePage && (
        <GridItem area="aside">
          <Aside /> 
        </GridItem>
      )}

     
      <GridItem area={"main"}>
        <Outlet/> 
      </GridItem>
    </Grid>
  );
};

export default Layout;

