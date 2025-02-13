import { Badge } from "@chakra-ui/react";
import { Tag } from "../hooks/useRecipes";


interface Props {
    tag: Tag;
  }


  const getColor = (name: string) => {
    switch (name) {
      case "Chokolade":
        return "brown";
      case "Mandler":
        return "creme";
      case "Æble":
        return "green";
      case "Hindbær":
        return "pink";
      case "Citron":
        return "yellow";
      case "Banan":
          return "yellow";
    }
  };
  
  const RecipeTag = ({ tag }: Props) => {

    
    return (
      <Badge variant={getColor(tag.name)}>
        {tag.name}
      </Badge>
    );
  };
  
  export default RecipeTag;