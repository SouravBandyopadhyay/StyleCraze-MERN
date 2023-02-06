import { Box, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortPostsAsc } from "../Redux/productsSlice";
const Sorting = () => {
  const { status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("asc");
  return (
    <Box w="30%" margin="auto">
      <Select placeholder="Sort Price by">
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
    </Box>
  );
};
export default Sorting;
