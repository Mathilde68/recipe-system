import { HStack, Heading, Box } from "@chakra-ui/react";
import { MdBakeryDining } from "react-icons/md";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack
      padding={"0rem 1rem"}
      bg={"rosebrown.500"}
      color={"palecream.500"}
      zIndex={5}
      position={{ base: "fixed", lg: "sticky" }}
      top={0}
      width="100%"
      justifyContent={"flex-end"}
    >
      <HStack
        justifyContent={"space-between"}
        width={{ base: "calc(50% + 32px)", md: "calc(50% + 124px)", lg: "100%" }}
      >
        <HStack>
          <ChakraLink as={ReactRouterLink} to="/">
            <MdBakeryDining size={"4rem"} color="#F0B690" />
          </ChakraLink>
          <Heading  display={{ base: 'none', md:'block' }} size={{ base: "none", lg: "md" }}>
            Thilde's Bagebog
          </Heading>
        </HStack>

        <ColorModeSwitch />
        
      </HStack>
    </HStack>
  );
};

export default NavBar;
