import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Divider,
  Card,
  useColorMode,
} from "@chakra-ui/react";
import RecipeDetailsSkeleton from "./RecipeDetailsSkeleton";

import useRecipe from "../../hooks/useRecipe";
import RecipeTag from "../RecipeTag";
import WakeLockSwitch from "./WakeLockSwitch";
import BackButton from "./BackButton";
import RecipeQuickInfo from "./RecipeQuickInfo";
import RecipeInfoPanel from "./RecipeInfoPanel";
import RecipeProcedure from "./RecipeProcedure";

const img_preurl = "../img/";

const RecipeDetails = () => {
  const { colorMode } = useColorMode();

  const { id = "" } = useParams<{ id: string }>();

  const { recipe,isLoading, error } = useRecipe(id);

  if (error) {
    return (
      <Heading py={"5rem"} textAlign={"center"}>
        Oopsie! Der skete en fejl.
      </Heading>
    );
  }

  if (isLoading) {
    return <RecipeDetailsSkeleton />;
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
      <BackButton />

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
          <RecipeQuickInfo quickInfo={recipe.quick_info} />
        )}

        <WakeLockSwitch />
      </Flex>

      {/* 🔥✨ Main opskrift indhold ✨🔥 */}
      <Flex
        mt={recipe.quick_info.length > 0 ? { base: "0px", lg: "-25px" } : 2}
        pb={10}
        direction={{ base: "column", lg: "row" }}
      >
        {/* ingredienser, kategori og diet tags } */}
        <RecipeInfoPanel
          ingredient_groups={recipe.ingredient_groups}
          category={recipe.category}
          ingredient_tags={recipe.ingredient_tags}
          diet_type_tags={recipe.diet_type_tags}
        />
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
        {/* Fremgangsmåde } */}
        <RecipeProcedure procedure_steps={recipe.procedure_steps} />
      </Flex>
    </Card>
  );
};

export default RecipeDetails;
