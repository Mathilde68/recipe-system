 import { Flex, Text, useColorMode } from "@chakra-ui/react";

 interface RecipeQuickInfoProps {
  quickInfo: string[];
}


 const RecipeQuickInfo = ({ quickInfo }: RecipeQuickInfoProps) => {
   const { colorMode } = useColorMode();
 
 

 return (
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
             {quickInfo.map((info) => (
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
 );
}
export default RecipeQuickInfo;