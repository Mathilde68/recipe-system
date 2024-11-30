import { useParams } from "react-router-dom";
import useRecipes from "../hooks/useRecipes";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  VStack,
  Card,
  CardBody,
  useColorMode,
} from "@chakra-ui/react";

const img_preurl = "/src/img/";

const RecipeDetails = () => {
  const { colorMode } = useColorMode();

  const { id } = useParams<{ id: string }>(); // Fetch the ID from the URL
  const recipes = useRecipes(); // Fetch all recipes (can replace with an API call later)

  // Find the recipe by id
  const recipe = recipes.find((recipe) => recipe._id === id); // Correctly compare id
  if (!recipe) {
    return <Heading>Recipe not found</Heading>;
  }

  const img_url = img_preurl + recipe.image_src;

  return (
    <Card borderRadius="2xl" maxW="90%" mx="auto" mt={10} bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}>
      <Image src={img_url} alt="Chocolate Cake" borderTopRadius="2xl" objectFit="cover" boxSize="100%" height={"280px"}/>
      <Box p={4}> 
        <Heading fontSize="3xl" position="relative" top="-45px" left="-25px" px={4}  py={2} display="inline-block"  borderRadius="lg"
        color= "palecream.500" bg="rosebrown.500">
          {recipe.title}
        </Heading>
      </Box>
      <Flex>
        <Box width="30%" p={4}>
          <Text fontWeight="bold">Ingredients</Text>
          <VStack align="start" spacing={1}>
            <Text>200 g smør</Text>
            <Text>200 g mørk chokolade</Text>
            <Text>4 æg</Text>
            <Text>225 g sukker</Text>
            <Text>1 tsk vaniljesukker</Text>
            <Text>110 g hvedemel</Text>
            <Text>0,50 tsk flagesalt</Text>
            <Text>100 g valnødder, grofthakkede</Text>
          </VStack>
        </Box>
        <Divider orientation="vertical" />
        <Box width="70%" p={4}>
          <Text fontWeight="bold">Fremgangsmåde</Text>
          <Text>
           {recipe.procedure}
          </Text>
          {/* Add more method steps here */}
        </Box>
      </Flex>
    </Card>
  );
};

export default RecipeDetails;
