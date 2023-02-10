import React from "react";
import {
  Select,
  Button,
  Box,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Categories = ({ currentCategory, categoryChangeHandler }) => {
  const { items } = useSelector((state) => state.products);
  const categories = [];
  items.map((el) => categories.push(el.category));
  const categoriesFinal = ["All Categories", ...new Set(categories)];
  return (
    <Stack justifyContent="center" direction="row" spacing={4} align="center">
      {categoriesFinal.map((category) => (
        <Button variant='ghost' colorScheme='pink' fontSize={["xs","sm","md"]} key={category} onClick={() => categoryChangeHandler(category)}>
          {category}
        </Button>
      ))}
    </Stack>
  );
};
export default Categories;
