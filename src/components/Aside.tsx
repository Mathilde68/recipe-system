import { GridItem, useColorMode } from "@chakra-ui/react";

const Aside = () => {
  const { colorMode } = useColorMode();

  return (
    <GridItem
      area={"aside"}
      bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}
      height={"100vh"}
    >
      <h4>hello</h4>
    </GridItem>
  );
};

export default Aside;