import { HStack, Heading } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
        <Heading size="md">Recipe App</Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;