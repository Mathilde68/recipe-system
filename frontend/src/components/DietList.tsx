import {
  Button,
  Flex,
  useColorMode,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import RecipeTag from "./RecipeTag";
import useDiets from "../hooks/useDiets";
import { Tag } from "../hooks/useRecipes";

interface DietListProps {
  onSelectDiet: (diet: Tag | null) => void; 
  selectedDiet: Tag | null; 
}

const DietList = ({ onSelectDiet, selectedDiet }: DietListProps) => {
  const { colorMode } = useColorMode();
  const { diets, loading, error } = useDiets();

  return (
    <Box px={4}>
      <Flex justifyContent={"space-between"} mr={4} marginBottom={2}>
        <Heading fontSize={"xl"} >
          Diæt type
        </Heading>

        {selectedDiet && (
          <Box as="button" onClick={() => onSelectDiet(null)}>
            <Text
              textDecor={"underline"}
              fontSize={"s"}
              color={colorMode === "dark" ? "peachbrown.500" : "rosebrown.500"}
              fontWeight={"normal"}
            >
              Ryd
            </Text>
          </Box>
        )}
      </Flex>
      <Flex px={2} wrap="wrap" gap={1}>
        {diets.map((diet) => (
          <Box as="button" key={diet._id} onClick={() => onSelectDiet(diet)}>
            <RecipeTag tag={diet} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default DietList;
