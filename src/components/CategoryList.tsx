import { useColorMode } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";

const CategoryList = () => {
  const { colorMode } = useColorMode();


  const categories = useCategories();

  return (
  
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
      
  );
};

export default CategoryList;