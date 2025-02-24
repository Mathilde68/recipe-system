import {Card,CardBody,Image,Flex,Heading,Text,useColorMode,Stack} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import { Recipe } from "../../hooks/useRecipes";
import RecipeTag from "../RecipeTag";

interface Props {
  recipe: Recipe;
}

const img_preurl = "./img/";

const RecipeCard = ({ recipe }: Props) => {
  const { colorMode } = useColorMode();
  const img_url = img_preurl + recipe.image_src;
  return (
    <Flex basis={"350px"} grow={"1"} margin="10px">
      <ChakraLink
        width="100%" _hover={{ textDecoration: "none", boxShadow: "lg" }}
        borderRadius={"2xl"} boxShadow={"md"}
        as={ReactRouterLink}
        to={`/${recipe._id}`}
      >
        <Card
          width="100%" borderRadius={"2xl"} height={"375px"}
          bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}
          display="flex" flexDirection="column" _hover={{ textDecoration: "none", boxShadow: "xl" }}
        >
          <Image
            borderTopRadius="2xl" width={"100%"} height={"220px"} 
            objectFit="cover" 
            objectPosition="50% 60%"
            src={img_url}
            alt={recipe.title}
          />

          <CardBody
            w="100%"
            height={"155px"}
            display={"flex"}
            flexDirection={"column"}
            py={"5"}
            pt={"6"}
            pb={"4"}
            justifyContent={"center"}
          >
            <Stack direction="column" spacing={1}>
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
                color={
                  colorMode === "dark" ? "peachbrown.500" : "rosebrown.500"
                }
              >
                {recipe.category.name}
              </Text>
            </Stack>
            <Stack direction="row" spacing={1} mt={2} flexWrap={"wrap"}>
              {recipe.ingredient_tags.map((ingredientTag) => (
                <RecipeTag key={ingredientTag.name} tag={ingredientTag} />
              ))}
              {recipe.diet_type_tags.map((dietTag) => (
                <RecipeTag key={dietTag.name} tag={dietTag} />
              ))}
            </Stack>
          </CardBody>
        </Card>
      </ChakraLink>
    </Flex>
  );
};

export default RecipeCard;
