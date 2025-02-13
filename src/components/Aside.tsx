import { GridItem, useColorMode } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import CategoryList from "./CategoryList";

const Aside = () => {
  const { colorMode } = useColorMode();
  

  return (
    <GridItem
      area={"aside"}
      bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}
        height={"100vh"}
      >

<CategoryList/>
      
    </GridItem>
  );
};

export default Aside;