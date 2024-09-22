import { Badge } from "@chakra-ui/react";
import { Tag } from "../hooks/useRecipes";


interface Props {
    tag: Tag;
  }


  const getColor = (name: string) => {
    switch (name) {
      case "Chocolate":
        return "orange";
      case "Butter":
        return "yellow";
      case "Apple":
        return "green";
      case "Raspberry":
        return "pink";
    }
  };
  
  const RecipeTag = ({ tag }: Props) => {

    
    return (
      <Badge colorScheme={getColor(tag.name)}>
        {tag.name}
      </Badge>
    );
  };
  
  export default RecipeTag;