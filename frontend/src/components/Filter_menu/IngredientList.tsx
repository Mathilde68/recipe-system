import {
  Flex,
  Box,
  Text,
  useColorMode,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

import useIngredients from "../../hooks/useIngredients";
import RecipeTag from "../RecipeTag";
import { Tag } from "../../hooks/useRecipes";
import {  useState, useRef } from "react";

interface IngredientListProps {
  onSelectIngredient: (ingredient: Tag) => void; 
  onClearIngredients: () => void;
  selectedIngredients: Tag[]; 
}



const IngredientList = ({
  onSelectIngredient,
  onClearIngredients,
  selectedIngredients,
}: IngredientListProps) => {
  const { colorMode } = useColorMode();
  const { ingredients, loading, error } = useIngredients();
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);



   // Handle focusing on inputfield for search
   const inputFocus = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100); // Adding a delay because otherwise it didnt work ✨😅
  };


 // Handle Enter key press (to blur and focus on the first menu item)
 const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter" && menuRef.current) {
    console.log("Enter key pressed");
    menuRef.current.focus(); // Focus the first item in the menu
  }
};


  // filtering the ingredient list based on the search term, making sure to do lowercase 😘
   const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box px={4} marginBottom={8} >
      <Flex justifyContent={"space-between"} marginBottom={1} mr={4}>
        <Heading fontSize={"xl"}>Ingredienser</Heading>
        {/* Only renders clear button if there are selected ingredients ✨*/}
        {selectedIngredients.length > 0 ? (
          <Box as="button" onClick={onClearIngredients}>
            <Text
              textDecor={"underline"}
              fontSize={"s"}
              color={colorMode === "dark" ? "peachbrown.500" : "rosebrown.500"}
              fontWeight={"normal"}
            >
              Ryd
            </Text>
          </Box>
        ) : null}
      </Flex>
      {selectedIngredients.length > 0 ? (
      <Flex px={2} py={2} wrap="wrap" gap={1} marginBottom={2}>
        {selectedIngredients.map((ingredient) => (
          <Box
            as="button"
            key={ingredient._id}
            onClick={() => onSelectIngredient(ingredient)}
          >
            <RecipeTag tag={ingredient} />
          </Box>
        ))}
      </Flex>
      ) : null}
     {/* Menu used as drop down select */}
     <Menu onOpen={inputFocus} placement={"top"} variant={"flushed"} >
        <MenuButton as={Button}  rightIcon={<FaChevronDown />}
          px={5} 
          borderRadius={4}
          height={"2.2rem"}
          textAlign={"left"}
          fontSize={{base:"sm", lg:"md"}}
          bg={ colorMode === "dark" ? "darkbrown.700" : "palecream.500" }
          _focus={{ bg: colorMode === "dark" ? "darkbrown.700" : "palecream.500" }}
          _hover={{ bg: colorMode === "dark" ? "rosebrown.600" : "rosebrown.100" }}
          _active={{ bg: colorMode === "dark" ? "rosebrown.600" : "rosebrown.100" }}
          fontWeight={500}
          width={"100%"}
          >Vælg Ingredienser</MenuButton>
        <MenuList bg={ colorMode === "dark" ? "darkbrown.700" : "palecream.500" } pt={0} sx={{ maxHeight: "500px", overflowY: "auto" }} >
          {/* Input box for searching through the ingredients */}
          <Box m={1}>
            <Input variant='filled'
            
            bg={ colorMode === "dark" ? "darkbrown.800" : "creamwhite.600" }
            _focus={{ bg: colorMode === "dark" ? "darkbrown.800" : "creamwhite.600" }}
            _hover={{ bg: colorMode === "dark" ? "darkbrown.800" : "creamwhite.600"}}
            _active={{ bg: colorMode === "dark" ? "darkbrown.800" : "creamwhite.600" }}
            border={"none"}
            fontFamily={"body"}
            _placeholder={{ color: colorMode === "dark" ? "peachbrown.300" : "peachbrown.800" }}
            color={ colorMode === "dark" ? "peachbrown.300" : "peachbrown.800" } 

              ref={inputRef} 
              placeholder="Find ingredienser..."
              
              value={searchTerm}
              onChange={(e) => {setSearchTerm(e.target.value);  inputFocus() }}
              onKeyDown={handleKeyDown}
              size="sm"
            />
          </Box>

          {/* Filtered ingredients list */}
          {filteredIngredients.length > 0 ? (
            filteredIngredients.map((ingredient) => (
              <MenuItem 
              bg={ colorMode === "dark" ? "darkbrown.700" : "palecream.500" }
              _focus={{ bg: colorMode === "dark" ? "darkbrown.700" : "palecream.500" }}
              _hover={{ bg: colorMode === "dark" ? "rosebrown.600" : "rosebrown.100" }}
                key={ingredient._id}
                ref={menuRef}
                onClick={() => onSelectIngredient(ingredient)}
              >
                {ingredient.name}
              </MenuItem>
            ))
          ) : (
            <Text px={5} py={2} fontSize="sm" >
              Ingen ingredienser fundet
            </Text>
          )}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default IngredientList;
