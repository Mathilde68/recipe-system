import {
  Card,
  CardBody,
  Image,
  Flex,
  Heading,
  Text,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";
import RecipeTag from "./RecipeTag";
import { Link } from "react-router-dom";

interface Props {
  recipe: Recipe;
}

const img_preurl = "/src/img/";

const RecipeCard = ({ recipe }: Props) => {
  const { colorMode } = useColorMode();
  const img_url = img_preurl + recipe.image_src;
  return (
   
      <Flex basis={"350px"} grow={"1"} margin="10px">
        <Card
          width="100%"
          borderRadius={"2xl"}
          // Ensure the card takes up the full width of its parent
          height={"350px"}
          bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}
          display="flex"
          flexDirection="column"
        >
          <Image
            borderTopRadius="2xl"
            width={"100%"}
            height={"225px"}
            objectFit="cover"
            objectPosition="50% 60%"
            src={img_url}
            alt={recipe.title}
          />
           <Link to={`/recipe/${recipe._id}`}>
          <CardBody w="100%">
            <Heading
              fontSize="2xl"
              fontWeight="600"
              width={"100%"}
              color={colorMode === "dark" ? "palecream.500" : "darkbrown.500"}
            >
              {recipe.title}
            </Heading>
            <Text
              fontSize={"l"}
              color={colorMode === "dark" ? "peachbrown.500" : "rosebrown.500"}
            >
              {recipe.category.name}
            </Text>

            <Stack direction="row" spacing={2} mt={2}>
              {recipe.ingredient_tags.map((ingredientTag) => (
                <RecipeTag key={ingredientTag.name} tag={ingredientTag} />
              ))}
              {recipe.diet_type_tags.map((dietTag) => (
                <RecipeTag key={dietTag.name} tag={dietTag} />
              ))}
            </Stack>
          </CardBody>
          </Link>
        </Card>
      </Flex>
   
  );
};

export default RecipeCard;
