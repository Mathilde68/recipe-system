import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
       <MdDarkMode size="1.5rem" color="#EEDED9"/>
      <Switch
        aria-label="Dark mode switch"
        onChange={toggleColorMode}
        colorScheme="peachbrown"
        color={"peachbrown.500"}
        isChecked={colorMode === "dark"}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
