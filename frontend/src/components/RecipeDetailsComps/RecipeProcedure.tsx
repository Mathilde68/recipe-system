 import { VStack, Box, Text, useColorMode } from "@chakra-ui/react";
 import { ProcedureStep } from "../../hooks/useRecipe"; 
 import RecipeTag from "../RecipeTag";
 

 interface RecipeProcedureProps {
     procedure_steps: ProcedureStep[];
 }

 const RecipeProcedure = ({ procedure_steps }: RecipeProcedureProps) => {
   const { colorMode } = useColorMode();
 
 return (
  <Box
          width={{ base: "100%", lg: "70%" }}
          px={{ base: 6, md: 8 }}
          pt={{ base: 10, lg: 0 }}
          pl={{ base: 6, md: "4rem", lg: "5rem" }}
        >
          <VStack align="start" spacing={10}>
            {procedure_steps.map((step) => (
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
 );
}
export default RecipeProcedure;