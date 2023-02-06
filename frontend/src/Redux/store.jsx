import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { authApi } from "./authService";
import productsReducer, { productsFetch } from "./productsSlice";
import { productsApi } from "./productsApi";
import cartReducer, { getTotals } from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    products: productsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware)
});
store.dispatch(productsFetch());
store.dispatch(getTotals());
export default store;
