import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";
import RecipeTag from "./RecipeTag";
import { px } from "framer-motion";


interface Props {
    recipe: Recipe;
  }

  const img_preurl="/src/img/"
 

  
  const RecipeCard = ({ recipe }: Props) => {

    const img_url = img_preurl+recipe.image_src
    return (
      <Card borderRadius={"1.5rem"} height={"280px"} width={"350px"}>
        <Image  borderRadius={"1.5rem 1.5rem 0rem 0rem"} width={"100%"} height={"180px"} objectFit='cover' src={img_url} alt={recipe.title} />
        <CardBody>
          <Heading fontSize="xl">{recipe.title}</Heading>
          <Text fontSize={"l"}>{recipe.category.name}</Text>
          
          {recipe.ingredient_tags.map((ingredientTag) => (
            <RecipeTag tag={ingredientTag} />
      ))}
        {recipe.diet_type_tags.map((dietTag) => (
             <RecipeTag tag={dietTag} />
      ))}
         

        </CardBody>
      </Card>
    );
  };
  
  export default RecipeCard;