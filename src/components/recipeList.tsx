import { Flex} from '@chakra-ui/react';
import useRecipes from '../hooks/useRecipes';
import RecipeCard from "./recipeCard";

const RecipeList = () => {


  const recipes = useRecipes();

  

  return (
    <Flex
      wrap="wrap"
      justify="space-between"
      padding={10}
    >
      {recipes.map((recipe) => (
      
       <RecipeCard key={recipe._id} recipe={recipe} />
    
      ))}
    </Flex>
  );
};

export default RecipeList;

