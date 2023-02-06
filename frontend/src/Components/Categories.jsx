import React from "react";
import { Select, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Categories = ({ currentCategory, categoryChangeHandler }) => {
  const { items } = useSelector((state) => state.products);
  const categories = [];
  items.map((el) => categories.push(el.category));
  const categoriesFinal = ["All Categories", ...new Set(categories)];
  return (
    <ul>
      {categoriesFinal.map((category) => (
        <Button key={category} onClick={() => categoryChangeHandler(category)}>
          {category}
        </Button>
      ))}
    </ul>
  );
};
export default Categories;
