import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  VStack,
  Card,
  Button,
  useColorMode,
  Switch,
  HStack,
} from "@chakra-ui/react";
import { IoReturnUpBack } from "react-icons/io5";
import RecipeDetailsLoading from "./RecipeDetailsLoading";

import useRecipe from "../hooks/useRecipe";
import RecipeTag from "./RecipeTag";
import WakeLockSwitch from "./WakeLockSwitch";

const img_preurl = "../img/";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const { id = "" } = useParams<{ id: string }>();

  const { recipe, loading, error } = useRecipe(id); // Destructure the returned object

  if (error) {
    return (
      <Heading py={"5rem"} textAlign={"center"}>
        Oopsie! Der skete en fejl.
      </Heading>
    );
  }

  if (loading) {
    return <RecipeDetailsLoading />;
  }

  if (!recipe) {
    return (
      <Heading py={"5rem"} textAlign={"center"}>
        Oopsie! Opskriften kunne ikke findes.
      </Heading>
    );
  }
  const img_url = img_preurl + recipe.image_src;

  return (
    <Card
      borderRadius="2xl"
      maxW="1000px"
      mx={{ base: "1rem", md: "4rem", lg: "auto" }}
      my={10}
      boxShadow={"lg"}
      bg={colorMode === "dark" ? "darkbrown.500" : "creamwhite.500"}
    >
      {/* Tilbage knap ✨✨ */}
      <Button
        onClick={() => navigate(-1)}
        width={"3rem"}
        height={"3rem"}
        variant="flushed"
        p={0}
        position={"absolute"}
        top={"1rem"}
        left={"1rem"}
        borderRadius={"5rem"}
        bg={colorMode === "dark" ? "rosebrown.500" : "palecream.500"}
        color={colorMode === "dark" ? "palecream.500" : "rosebrown.500"}
        boxShadow={"md"}
      >
        <IoReturnUpBack size="2rem" />
      </Button>

      <Image
        src={img_url}
        alt={recipe.title}
        borderTopRadius="2xl"
        objectFit="cover"
        objectPosition={{ base: "center", md: "50% 60%" }}
        boxSize="100%"
        height={"350px"}
      />
      <Box>
        <Heading
          fontSize={{ base: "1.35rem", md: "3xl" }}
          position="relative"
          top="-35px"
          left="-25px"
          px={{ base: 5, lg: 8 }}
          py={2}
          display="inline-block"
          borderRadius="lg"
          color="palecream.500"
          bg="rosebrown.500"
          textAlign={"right"}
        >
          {recipe.title}
        </Heading>
      </Box>

      {/*Screen keep on and info box */}
      <Flex
        position="relative"
        top={"-15px"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={{ md: "space-between", lg: "flex-end" }}
        px={{ base: 6, md: "4rem", lg: 5 }}
        gap={4}
      >
        {/* Quick info boks */}
        {recipe.quick_info.length > 0 && (
          <Flex
            width={"fit-content"}
            justifyContent={"center"}
            direction="row"
            border={"1px solid"}
            borderRadius={"md"}
            borderColor={
              colorMode === "dark" ? "peachbrown.400" : "rosebrown.500"
            }
            py={2}
            px={3}
            gap={4}
            height={"min-content"}
          >
            {recipe.quick_info.map((info) => (
              <Text
                key={info}
                height={"min-content"}
                fontSize={{ base: "sm", md: "md" }}
                color={
                  colorMode === "dark" ? "peachbrown.400" : "rosebrown.500"
                }
              >
                {info}
              </Text>
            ))}
          </Flex>
        )}

        <WakeLockSwitch />
      </Flex>

      {/* 🔥✨ Main opskrift indhold ✨🔥 */}
      <Flex
        mt={recipe.quick_info.length > 0 ? { base: "0px", lg: "-25px" } : 2}
        pb={10}
        direction={{ base: "column", lg: "row" }}
      >
        <VStack
          fontSize="1rem"
          width={{ base: "100%", lg: "30%" }}
          align="start"
          px={{ base: 6, md: "4rem", lg: 8 }}
          spacing={{ base: 5, lg: 8 }}
          minHeight={{ base: "auto", lg: "500px" }}
        >
          <Box>
            <Text fontSize={"1.1rem"} fontWeight="bold">
              Ingredienser
            </Text>
            <VStack align="start" spacing={4} direction="row">
              {recipe.ingredient_groups.map((group) => (
                <Box key={group.name}>
                  {/* Vis kun titel group.name hvis der er flere ingrediensgrupper */}
                  {recipe.ingredient_groups.length > 1 && (
                    <Text
                      fontWeight="semibold"
                      color={
                        colorMode === "dark"
                          ? "peachbrown.400"
                          : "rosebrown.500"
                      }
                    >
                      {group.name}
                    </Text>
                  )}
                  {group.ingredients.map((ingredient) => (
                    <Text
                      lineHeight={1.8}
                      key={ingredient.name}
                      color={
                        colorMode === "dark"
                          ? "peachbrown.400"
                          : "rosebrown.500"
                      }
                    >
                      {ingredient.amount} {ingredient.name}
                    </Text>
                  ))}
                </Box>
              ))}
            </VStack>
          </Box>
          {/*  Kategori */}
          <Box>
            <Text fontSize={"1.1rem"} fontWeight="bold">
              Kategori
            </Text>
            <Text
              key={recipe.category.name}
              color={colorMode === "dark" ? "peachbrown.400" : "rosebrown.500"}
            >
              {recipe.category.name}
            </Text>
          </Box>
          {/* // Hovedingredienser for display of ingredient tags */}
          <Box>
            <Text fontSize={"1.1rem"} fontWeight="bold" pb={1}>
              Hovedingredienser
            </Text>
            <Flex align="start" gap={1} direction="row" flexWrap={"wrap"}>
              {recipe.ingredient_tags.map((ingredient) => (
                <Box key={ingredient.name}>
                  <RecipeTag tag={ingredient} />
                </Box>
              ))}
            </Flex>
          </Box>

          {/*  Vis kun denne sektion hvis der er diættype tags */}
          {recipe.diet_type_tags.length > 0 && (
            <Box>
              <Text fontSize={"1.1rem"} fontWeight="bold" pb={1}>
                Diættype
              </Text>
              <VStack align="start" spacing={1}>
                {recipe.diet_type_tags.map((diet) => (
                  <Box key={diet.name}>
                    <RecipeTag tag={diet} />
                  </Box>
                ))}
              </VStack>
            </Box>
          )}
        </VStack>
        {/* Divider, vises kun på desktop hvor indhold direction vises i row */}
        <Stack minHeight="500px" display={{ base: "none", lg: "flex" }}>
          <Divider
            minHeight="500px"
            height={"100%"}
            orientation="vertical"
            borderWidth="1px"
            opacity="0.9"
            borderColor={
              colorMode === "dark" ? "peachbrown.500" : "rosebrown.300"
            }
          />
        </Stack>

        <Box
          width={{ base: "100%", lg: "70%" }}
          px={{ base: 6, md: 8 }}
          pt={{ base: 10, lg: 0 }}
          pl={{ base: 6, md: "4rem", lg: "5rem" }}
        >
          <VStack align="start" spacing={10}>
            {recipe.procedure_steps.map((step) => (
              <Box key={step.name}>
                <Text
                  pb={1}
                  fontWeight="semibold"
                  fontSize={"1.1rem"}
                  color={
                    colorMode === "dark" ? "palecream.500" : "darkbrown.500"
                  }
                >
                  {step.name}
                </Text>
                <VStack align="start" spacing={2}>
                  {step.steps.map((step) => (
                    <Text
                      key={step}
                      color={
                        colorMode === "dark" ? "palecream.500" : "darkbrown.500"
                      }
                    >
                      {step}
                    </Text>
                  ))}
                </VStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Card>
  );
};

export default RecipeDetails;
