import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu/menuSlice";
import productDetailSlice from "./product-detail/productDetailSlice";
import ourTeamSlice from "./our-team/ourTeamSlice";
import productsCategorySlice from "./products-category/productsCategorySlice";
import productsSlice from "./products/productsSlice";
import searchResultsSlice from "./searchResults/searchResultsSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    productDetail: productDetailSlice,
    ourTeam: ourTeamSlice,
    productsCategory: productsCategorySlice,
    products: productsSlice,
    searchResults: searchResultsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
