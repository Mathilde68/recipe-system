import { GridItem,Heading, useColorMode } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import IngredientList from "./IngredientList";
import { Tag } from '../hooks/useRecipes';

interface AsideProps {
  onSelectCategory: (categoryId: number | null) => void;
  onSelectIngredient: (ingredient: Tag) => void; 
  onClearIngredients: () => void;
  selectedIngredients: Tag[]; 
}

const Aside = ({ onSelectCategory, onSelectIngredient, onClearIngredients, selectedIngredients }: AsideProps) => {
  const { colorMode } = useColorMode();
  
 

  return (
    <GridItem
      area={"aside"}
      bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}
        minHeight={"100vh"} height={"100%"} 
      >

    <CategoryList onSelectCategory={onSelectCategory} />

    <IngredientList 
        onSelectIngredient={onSelectIngredient} 
        onClearIngredients={onClearIngredients}
        selectedIngredients={selectedIngredients}
      />
    </GridItem>
  );
};

export default Aside;