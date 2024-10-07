import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        onChange={toggleColorMode}
        colorScheme="peachbrown"
        color={"peachbrown.500"}
        isChecked={colorMode === "dark"}
      />
      <Text>Dark mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
