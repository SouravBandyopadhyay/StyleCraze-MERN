import React from "react";
import { Select, Button, Box, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Categories = ({ currentCategory, categoryChangeHandler }) => {
  const { items } = useSelector((state) => state.products);
  const categories = [];
  items.map((el) => categories.push(el.category));
  const categoriesFinal = ["All Categories", ...new Set(categories)];
  return (
    <HStack spacing={3} justifyContent="center">
      {categoriesFinal.map((category) => (
        <Button key={category} onClick={() => categoryChangeHandler(category)}>
          {category}
        </Button>
      ))}
    </HStack>
  );
};
export default Categories;
