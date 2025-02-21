import {
  Box,
  Button,
  Card,
  Flex,
  Skeleton,
  SkeletonText,
  VStack,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { IoReturnUpBack } from "react-icons/io5";

const RecipeDetailsLoading = () => {
  const { colorMode } = useColorMode();

  return (
    <Card
      borderRadius="2xl"
      maxW={{base:"100%", md: "1000px"}}
      mx={{ base: "1rem", md: "3rem", lg: "auto" }}
      my={10}
      boxShadow="lg"
      bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}
    >
      {/* Tilbage knap */}
      <Button
        width="3rem"
        height="3rem"
        variant="flushed"
        p={0}
        position="absolute"
        top="1rem"
        left="1rem"
        borderRadius="5rem"
        bg={colorMode === "dark" ? "rosebrown.500" : "palecream.500"}
        color={colorMode === "dark" ? "palecream.500" : "rosebrown.500"}
        boxShadow="md"
        isDisabled
      >
        <IoReturnUpBack size="2rem" />
      </Button>

      {/* Billed placeholder */}
      <Skeleton height="350px" width="100%" borderTopRadius="2xl" speed={2} />

      {/* Opskriftens titel placeholder */}
      <Box
        position="relative"
        top="-35px"
        left="-35px"
        py={2}
        display="inline-block"
        borderRadius="lg"
        zIndex={1}
      >
        <Skeleton
          height="3rem"
          width="20rem"
          borderRadius="lg"
          speed={2}
        />
      </Box>

      {/* Hovedindhold placeholder */}
      <Flex direction={{ base: "column", md: "row" }} px={6} pb={10} gap={6}>
        {/* ingredienser, kategori og tags */}
        <VStack align="start" spacing={6} width={{ base: "100%", md: "30%" }}>
          <Box width={"100%"}>
            <Skeleton
              height="30px"
              width="150px"
              borderRadius="md"
              mb={2}
              speed={2}
            />
            <SkeletonText noOfLines={8} spacing={4} width="90px" speed={2} />
          </Box>
          <Box>
            <Skeleton
              height="30px"
              width="150px"
              borderRadius="md"
              mb={2}
              speed={2}
            />
            <SkeletonText noOfLines={1} width="90px" speed={2} />
          </Box>
          <Box>
            <Skeleton
              height="30px"
              width="150px"
              borderRadius="md"
              mb={2}
              speed={2}
            />
            <Stack direction="row" spacing={1} mt={2} flexWrap={"wrap"}>
              <Skeleton
                height="23px"
                width="60px"
                borderRadius="md"
                speed={2}
              />
            </Stack>
          </Box>
        </VStack>

        {/* Divider */}
        <Skeleton
          height="400px"
          width="2px"
          display={{ base: "none", md: "block" }}
          speed={2}
        />

        {/* Recipe text */}
        <VStack align="start" spacing={6} width={{ base: "100%", md: "70%" }}>
          <SkeletonText noOfLines={1} width="20%" speed={2} />
          <SkeletonText
            noOfLines={6}
            spacing={4}
            width="70%"
            mb={4}
            speed={2}
          />
          <SkeletonText noOfLines={1} width="20%" speed={2} />
          <SkeletonText noOfLines={4} spacing={4} width="90%" speed={2} />
        </VStack>
      </Flex>
    </Card>
  );
};

export default RecipeDetailsLoading;
