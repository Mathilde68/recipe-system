 import { Button, useColorMode } from "@chakra-ui/react";
 import { IoReturnUpBack } from "react-icons/io5";

 import { useNavigate} from "react-router-dom";

 const BackButton = () => {
   const navigate = useNavigate();
   const { colorMode } = useColorMode();
 
 
 
 return (
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
 );
}
export default BackButton;