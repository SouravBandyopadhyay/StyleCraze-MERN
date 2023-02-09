import { Box, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Components/Categories";
import SearchProduct from "../Components/Searching";
import { filterPosts } from "../Redux/productsSlice";
import Products from "../Components/Products";
import { useGetAllProductsQuery } from "../Redux/productsApi";
import Searching from "../Components/Searching";
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
  // search Functionality
  const [item, setItem] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleAsync = async () => {
    const res = await fetch("https://stylecraze-backend.onrender.com/prod/getprod");
    const data = res.json();
    data
      .then((res) => {
        console.log(res);
        setItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      handleAsync();
    }, 500);
    return () => clearTimeout(handleAsync);
  }, []);
  const searchResult = () => {
    let filteredPosts;
    if (searchQuery) {
      filteredPosts = item.filter((post) =>
        post.name.toLowerCase().includes(searchQuery.toLowerCase())
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
          <Searching
            value={searchQuery}
            onChange={handleChange}
            posts={item}
            searchResult={searchResult()}
            searchQuery={searchQuery}
          />
          <Products filter={filter} />
        </Box>
      ) : status === "pending" ? (
        <>
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
