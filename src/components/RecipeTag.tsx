import { Badge } from "@chakra-ui/react";
import { Tag } from "../hooks/useRecipes";


interface Props {
    tag: Tag;
  }
  
  const RecipeTag = ({ tag }: Props) => {
    return (
      <Badge>
        {tag.name}
      </Badge>
    );
  };
  
  export default RecipeTag;