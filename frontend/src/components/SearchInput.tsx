import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
import { useColorMode } from "@chakra-ui/react";

interface SearchInputProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ searchQuery, onSearchChange }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { colorMode } = useColorMode();

  // Handle focusing on input field for search
  const inputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <InputGroup px={{base:"30px", md:"50px"}} mt={4}>
      <InputLeftAddon
        bg={colorMode === "dark" ? "darkbrown.400" : "rosebrown.200"}
        onClick={inputFocus}
      >
        <FaSearch />
      </InputLeftAddon>
      <Input
        variant={"filled"}
        bg={colorMode === "dark" ? "richblack.400" : "creamwhite.500"}
        _focus={{
          bg: colorMode === "dark" ? "richblack.400" : "creamwhite.500",
        }}
        _hover={{
          bg: colorMode === "dark" ? "richblack.400" : "creamwhite.500",
        }}
        _active={{
          bg: colorMode === "dark" ? "richblack.400" : "creamwhite.500",
        }}
        border={"none"}
        fontFamily={"body"}
        _placeholder={{
          color: colorMode === "dark" ? "peachbrown.500" : "peachbrown.800",
        }}
        color={colorMode === "dark" ? "peachbrown.100" : "rosebrown.500"}
        placeholder="Søg i opskrifter..."
        ref={inputRef}
        value={searchQuery}
        onChange={onSearchChange}
        mb={5}
      />
    </InputGroup>
  );
};

export default SearchInput;