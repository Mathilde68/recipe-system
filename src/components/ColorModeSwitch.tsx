import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
       <MdDarkMode size="1.5rem" color="#2C2020"/>
      <Switch
        onChange={toggleColorMode}
        colorScheme="peachbrown"
        color={"peachbrown.500"}
        isChecked={colorMode === "dark"}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
