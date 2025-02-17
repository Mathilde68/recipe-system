import { Badge } from "@chakra-ui/react";
import { Tag } from "../hooks/useRecipes";

interface Props {
  tag: Tag;
  isSelected?: boolean; // Add this prop
}

const colorGroups: { [key: string]: string[] } = {
  orange: ["Appelsin", "Fersken", "Gulerod", "Safran", "Mango"],
  green: ["Æble", "Lime", "Pære", "Pistacie", "Vindruer", "Squash"],
  yellow: ["Banan", "Citron", "Passionsfrugt"],
  pink: ["Hindbær", "Rose"],
  darkPink: ["Kirsebær", "Solbær", "Granatæble"],
  red: ["Tranebær", "Jordbær", "Ribs"],
  brown: ["Chokolade", "Dadler", "Hasselnødder"],
  caramel: ["Karamel", "Nougat", "Mandler", "Kanel"],
  purple: [ "Skovbær", "Brombær"],
  blue: ["Blåbær"],
  black: ["Lakrids", "Rosiner", "Kaffe"],
  creme: ["Kokos", "Peanuts", "Valnødder", "Flødeost", "Marcipan"],
};

const getColor = (name: string): string => {
  for (const [color, tags] of Object.entries(colorGroups)) {
    if (tags.includes(name)) {
      return color;
    }
  }
  return "null"; 
};

const RecipeTag = ({ tag, isSelected }: Props) => {
  return (
    <Badge variant={getColor(tag.name)}>
      {tag.name}
    </Badge>
  );
};

export default RecipeTag;