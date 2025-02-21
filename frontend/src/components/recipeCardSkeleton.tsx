import { Flex, Card, CardBody, Heading, Stack, Skeleton, SkeletonText, useColorMode, } from "@chakra-ui/react";


const RecipeCardSkeleton = () => {
    const { colorMode } = useColorMode();
  return (
    <Flex basis={"350px"} grow={"1"} margin="10px">
      <Card
        width="100%"
        borderRadius={"2xl"}
        height={"375px"}
        boxShadow={"md"}
        display="flex"
        flexDirection="column"
        bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}
      >
        <Skeleton height="220px" borderTopRadius="2xl" speed={2} />
        <CardBody
          w="100%"
          height={"155px"}
          display={"flex"}
          flexDirection={"column"}
          py={"5"}
          pt={"6"}
          pb={"4"}
          justifyContent={"center"}
        >
           <Stack direction="column" spacing={4} >
             <Skeleton height={"30px"} width="80%" speed={2} mb={3}/>
             <SkeletonText noOfLines={1} width="20%" speed={2}/>
            </Stack>
            <Stack direction="row" mt={4} flexWrap={"wrap"} pb={2}>
            <Skeleton height="23px" width="70px" borderRadius="md" speed={2}/>
            <Skeleton height="23px" width="70px" borderRadius="md" speed={2}/>
            </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default RecipeCardSkeleton;
