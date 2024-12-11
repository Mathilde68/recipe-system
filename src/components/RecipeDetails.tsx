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
  Center,
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
    <Card
      borderRadius="2xl"
      maxW="1100px"
      mx="auto"
      mt={10}
      bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}
    >
      <Image
        src={img_url}
        alt="Chokolade Cake"
        borderTopRadius="2xl"
        objectFit="cover"
        boxSize="100%"
        height={"300px"}
      />
      <Box>
        <Heading
          fontSize="3xl"
          position="relative"
          top="-35px"
          left="-25px"
          px={4}
          py={2}
          display="inline-block"
          borderRadius="lg"
          color="palecream.500"
          bg="rosebrown.500"
        >
          {recipe.title}
        </Heading>
      </Box>
      <Flex>
        <Box width="30%" px={8} height="500px">
          <Text fontWeight="bold">Ingredients</Text>
          <VStack align="start" spacing={1} direction="row" h="500px" p={4} >
            {recipe.ingredients.map((ingredients) => (
            <Text color={colorMode === "dark" ? "peachbrown.500" : "rosebrown.500"} key={ingredients.name} >{ingredients.amount} {ingredients.name} </Text>
      ))}
          </VStack>
        </Box>

        <Stack height="450px">
          <Divider orientation="vertical"  borderWidth="1px" opacity="0.9" borderColor={colorMode === "dark" ? "peachbrown.500" : "rosebrown.500"} />
        </Stack>

        <Box width="70%" p={4}>
          <Text fontWeight="bold">Fremgangsmåde</Text>
          <Text>{recipe.procedure}</Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default RecipeDetails;
