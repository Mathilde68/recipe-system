 import { VStack, Box, Flex, Text, useColorMode } from "@chakra-ui/react";
 import { Tag, IngredientGroup, Category } from "../../hooks/useRecipe"; 
 import RecipeTag from "../RecipeTag";

 interface RecipeInfoPanelProps {
  
     ingredient_groups: IngredientGroup[];
     category: Category;
     ingredient_tags: Tag[];
     diet_type_tags: Tag[];
   
  
 }

 const RecipeInfoPanel = ({ ingredient_groups, category, ingredient_tags, diet_type_tags}: RecipeInfoPanelProps) => {
   const { colorMode } = useColorMode();
 
 return (
  <VStack
  fontSize="1rem"
  width={{ base: "100%", lg: "30%" }}
  align="start"
  px={{ base: 6, md: "4rem", lg: 8 }}
  spacing={{ base: 5, lg: 8 }}
  minHeight={{ base: "auto", lg: "500px" }}
>
  <Box>
    <Text fontSize={"1.1rem"} fontWeight="bold">
      Ingredienser
    </Text>
    <VStack align="start" spacing={4} direction="row">
      {ingredient_groups.map((group) => (
        <Box key={group.name}>
          {/* Vis kun titelen group.name hvis der er flere ingrediensgrupper ✨ */}
          {ingredient_groups.length > 1 && (
            <Text
              fontWeight="semibold"
              color={
                colorMode === "dark"
                  ? "peachbrown.400"
                  : "rosebrown.500"
              }
            >
              {group.name}
            </Text>
          )}
          {group.ingredients.map((ingredient) => (
            <Text
              lineHeight={1.8}
              key={ingredient.name}
              color={
                colorMode === "dark"
                  ? "peachbrown.400"
                  : "rosebrown.500"
              }
            >
              {ingredient.amount} {ingredient.name}
            </Text>
          ))}
        </Box>
      ))}
    </VStack>
  </Box>
  {/*  Kategori */}
  <Box>
    <Text fontSize={"1.1rem"} fontWeight="bold">
      Kategori
    </Text>
    <Text
      key={category.name}
      color={colorMode === "dark" ? "peachbrown.400" : "rosebrown.500"}
    >
      {category.name}
    </Text>
  </Box>
  {/* // Hovedingredienser for display of ingredient tags */}
  <Box>
    <Text fontSize={"1.1rem"} fontWeight="bold" pb={1}>
      Hovedingredienser
    </Text>
    <Flex align="start" gap={1} direction="row" flexWrap={"wrap"}>
      {ingredient_tags.map((ingredient) => (
        <Box key={ingredient.name}>
          <RecipeTag tag={ingredient} />
        </Box>
      ))}
    </Flex>
  </Box>

  {/*  Vis kun denne sektion hvis der er diættype tags */}
  {diet_type_tags.length > 0 && (
    <Box>
      <Text fontSize={"1.1rem"} fontWeight="bold" pb={1}>
        Diættype
      </Text>
      <VStack align="start" spacing={1}>
        {diet_type_tags.map((diet) => (
          <Box key={diet.name}>
            <RecipeTag tag={diet} />
          </Box>
        ))}
      </VStack>
    </Box>
  )}
</VStack>
 );
}
export default RecipeInfoPanel;