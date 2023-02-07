import { Box, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Components/Categories";
import SearchProduct from "../Components/Searching";
import { filterPosts } from "../Redux/productsSlice";
import Products from "../Components/Products";
import Skeleton from "../Components/Skeleton";
import { useGetAllProductsQuery } from "../Redux/productsApi";
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
  const { data } = useGetAllProductsQuery();

  // search
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const searchResult = () => {
    let filteredPosts;
    if (searchQuery) {
      filteredPosts = data.filter((el) =>
        el.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredPosts;
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
          <Products filter={filter} />
        </Box>
      ) : status === "pending" ? (
        <>
          {/* error in skeleton part */}
          {/* <Skeleton /> */}
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
