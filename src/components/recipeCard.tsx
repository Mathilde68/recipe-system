import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";


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
             <Text key={ingredientTag._id}>{ingredientTag.name}</Text>
      ))}
        {recipe.diet_type_tags.map((ingredientTag) => (
             <Text key={ingredientTag._id}>{ingredientTag.name}</Text>
      ))}
         

        </CardBody>
      </Card>
    );
  };
  
  export default RecipeCard;