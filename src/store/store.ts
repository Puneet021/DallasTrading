import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu/menuSlice";
import productDetailSlice from "./product-detail/productDetailSlice";
import ourTeamSlice from "./our-team/ourTeamSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    productDetail: productDetailSlice,
    ourTeam: ourTeamSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
