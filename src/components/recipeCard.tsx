import { Card, CardBody, Image, Heading, Text, useColorMode} from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";
import RecipeTag from "./RecipeTag";
import { px } from "framer-motion";
import { Link } from "react-router-dom";


interface Props {
    recipe: Recipe;
  }

  const img_preurl="/src/img/"
 

   
  
  const RecipeCard = ({ recipe }: Props) => {
    const { colorMode } = useColorMode(); 
    const img_url = img_preurl+recipe.image_src
    return (
      <Link to={`/recipe/${recipe._id}`}> 
      <Card borderRadius={"2xl"} height={"280px"}  bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"} >
        <Image borderTopRadius="2xl" width={"100%"} height={"180px"} objectFit='cover' src={img_url} alt={recipe.title} />
        <CardBody>
          <Heading fontSize="xl" color={colorMode === "dark" ? "palecream.500" : "darkbrown.500"}>{recipe.title}</Heading>
          <Text fontSize={"l"} color={colorMode === "dark" ? "peachbrown.500" : "rosebrown.500"}>{recipe.category.name}</Text>
          
          {recipe.ingredient_tags.map((ingredientTag) => (
            <RecipeTag  key={ingredientTag.name} tag={ingredientTag} />
      ))}
        {recipe.diet_type_tags.map((dietTag) => (
             <RecipeTag key={dietTag.name} tag={dietTag} />
      ))}
         

        </CardBody>
      </Card>
     </Link>
    );
  };
  
  export default RecipeCard;