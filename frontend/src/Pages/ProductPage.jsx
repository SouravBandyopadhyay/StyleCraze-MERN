import { Box, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Components/Categories";
// import SearchProduct from "../Components/Searching";
import { filterPosts } from "../Redux/productsSlice";
import Products from "../Components/Products";
import Skeleton from "../Components/Skeleton";
const ProductPage = () => {
  const { status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const categoryChangeHandler = (category) => {
    setCurrentCategory(category);
    if (category === "All Categories") {
      setFilter(false);
    } else {
      dispatch(filterPosts(category));
      setFilter(true);
    }
  };
  return (
    <Box>
      {status === "success" ? (
        <Box>
          <Text fontSize="4xl" letterSpacing="1" fontWeight="bold">
            Products Page
          </Text>
          <Categories
            currentCategory={currentCategory}
            categoryChangeHandler={categoryChangeHandler}
          />
          {/* <SearchProduct /> */}

          <Products filter={filter} />
        </Box>
      ) : status === "pending" ? (
        <>
          <Skeleton />
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </Box>
  );
};

export default ProductPage;
