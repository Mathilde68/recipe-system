import { HStack, Heading } from "@chakra-ui/react";
import { MdBakeryDining } from "react-icons/md";
import ColorModeSwitch from "./ColorModeSwitch";


const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={"0rem 1rem"} bg={"rosebrown.500"} color={"palecream.500"}>
       <HStack> <MdBakeryDining size={"4rem"} color="#DFA985" /> 
       <Heading size="md">Thilde's recipe collection</Heading>
       </HStack>
        
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;