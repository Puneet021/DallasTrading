import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu/menuSlice";
import productDetailSlice from "./product-detail/productDetailSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    productDetail: productDetailSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
