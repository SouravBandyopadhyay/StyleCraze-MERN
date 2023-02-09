import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  filteredPosts: [] // new added
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(
        "https://stylecraze-backend.onrender.com/prod/getprod"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterPosts(state, action) {
      state.filteredPosts = state.items.filter(
        (el) => el.category === action.payload
      );
    }
  }, // initially it is empty
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    }
  }
});
export const { filterPosts } = productsSlice.actions;
export default productsSlice.reducer;
