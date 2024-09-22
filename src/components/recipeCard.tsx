import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";
import RecipeTag from "./RecipeTag";


interface Props {
    recipe: Recipe;
  }
  
  const RecipeCard = ({ recipe }: Props) => {
    return (
      <Card>
        <CardBody>
          <Heading fontSize="2xl">{recipe.title}</Heading>
          <Text fontSize={"xl"}>{recipe.category.name}</Text>
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