import { Button, Flex, useColorMode, Heading } from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";

interface CategoryListProps {
  onSelectCategory: (categoryId: number | null) => void;
}

const CategoryList = ({ onSelectCategory }: CategoryListProps) => {
  const { colorMode } = useColorMode();
  const categories = useCategories();

  return (
    <Flex
      wrap="wrap"
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      flexDir={"column"}
      py={5}
      
    >
      <Heading fontSize={"xl"} px={5}>Kategorier</Heading>
      <Button
        px={5}
        justifyContent={"flex-start"}
        textAlign={"left"}
        bg={"transparent"}
        borderRadius={0}
        height={"2rem"}
        fontWeight={500}
        fontSize={"m"}
        width={"100%"}
        _focus={{ bg: colorMode === "dark" ? "rosebrown.600" : "rosebrown.100" }}
        _hover={{ bg: colorMode === "dark" ? "rosebrown.600" : "rosebrown.100" }}
        onClick={() => onSelectCategory(null)}
      >
        Alle
      </Button>

      {categories.map((category: Category) => (
        <Button
          px={5}
          justifyContent={"flex-start"}
          textAlign={"left"}
          bg={"transparent"}
          borderRadius={0}
          height={"2rem"}
          fontWeight={500}
          
          width={"100%"}
          _focus={{ bg: colorMode === "dark" ? "rosebrown.600" : "rosebrown.100" }}
          _hover={{ bg: colorMode === "dark" ? "rosebrown.600" : "rosebrown.100" }}
          key={category._id}
          onClick={() => onSelectCategory(category._id)}
        >
          {category.name}
        </Button>
      ))}
    </Flex>
  );
};

export default CategoryList;
