import { Button, Flex, useColorMode, Heading, SkeletonText } from "@chakra-ui/react";
import useCategories, { Category } from "../../hooks/useCategories";

interface CategoryListProps {
  onSelectCategory: (categoryId: string | null) => void;
  selectedCategory: string| null;
}

const CategoryList = ({
  onSelectCategory,
  selectedCategory,
}: CategoryListProps) => {
  const { colorMode } = useColorMode();
  const {categories, loading, error } = useCategories();

  if (loading) {
    return (
     
      <Flex
      wrap="wrap"
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      flexDir={"column"}
      py={5}
    >
      <Heading fontSize={"xl"} px={5}>
        Kategorier
      </Heading>
      <SkeletonText px={5} noOfLines={16} width="50%"  spacing={{base:5, lg: 6}} speed={2} />
     </Flex>
    );
  }

  return (
    <Flex
      wrap="wrap"
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      flexDir={"column"}
      py={5}
    >
      <Heading fontSize={"xl"} px={5}>
        Kategorier
      </Heading>
      <Button
        px={5}
        justifyContent={"flex-start"}
        textAlign={"left"}
        borderRadius={0}
        height={{ base: "1.6rem", lg: "2rem" }}
        fontWeight={500}
        fontSize={{ base: "sm", lg: "md" }}
        width={"100%"}
        _hover={{
          bg: colorMode === "dark" ? "rosebrown.600" : "rosebrown.100",
        }}
        bgColor={
          selectedCategory === null
            ? colorMode === "dark"
              ? "rosebrown.600"
              : "rosebrown.100"
            : "transparent"
        }
        onClick={() => onSelectCategory(null)}
      >
        Alle
      </Button>

      {categories.map((category: Category) => (
        <Button
          px={5}
          justifyContent={"flex-start"}
          textAlign={"left"}
          borderRadius={0}
          height={{ base: "1.6rem", lg: "2rem" }}
          fontWeight={500}
          fontSize={{ base: "sm", lg: "md" }}
          width={"100%"}
          _focus={{
            bg: colorMode === "dark" ? "rosebrown.600" : "rosebrown.100",
          }}
          _hover={{
            bg: colorMode === "dark" ? "rosebrown.600" : "rosebrown.100",
          }}
          bg={
            selectedCategory === category._id
              ? colorMode === "dark"
                ? "rosebrown.600"
                : "rosebrown.100"
              : "transparent"
          }
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
