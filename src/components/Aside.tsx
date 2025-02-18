import { GridItem, useColorMode } from "@chakra-ui/react";

import CategoryList from "./CategoryList";
import IngredientList from "./IngredientList";
import DietList from "./DietList";
import { Tag } from "../hooks/useRecipes";

interface AsideProps {
  onSelectCategory: (categoryId: number | null) => void;
  selectedCategory: number | null;
  onSelectIngredient: (ingredient: Tag) => void;
  onClearIngredients: () => void;
  selectedIngredients: Tag[];
  onSelectDiet: (diet: Tag | null) => void;
  selectedDiet: Tag | null;
  isOpen: boolean;
}

const Aside = ({
  onSelectCategory,
  selectedCategory,
  onSelectIngredient,
  onClearIngredients,
  selectedIngredients,
  onSelectDiet,
  selectedDiet,
  isOpen,
}: AsideProps) => {
  const { colorMode } = useColorMode();

  return (
    <GridItem
      area={"aside"}
      bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}
      w={{ base: "300px", lg: "300px" }}
      minHeight={"100vh"}
      height={"100%"}
      position={{ base: "fixed", lg: "static" }} 
      top={"0"}
      pt={{ base: "4rem", lg: "0" }}
      left={isOpen ? 0 : "-100%"} 
      zIndex={2}
    >
      <CategoryList
        onSelectCategory={onSelectCategory}
        selectedCategory={selectedCategory}
      />

      <IngredientList
        onSelectIngredient={onSelectIngredient}
        onClearIngredients={onClearIngredients}
        selectedIngredients={selectedIngredients}
      />

      <DietList onSelectDiet={onSelectDiet} selectedDiet={selectedDiet} />
    </GridItem>
  );
};

export default Aside;
