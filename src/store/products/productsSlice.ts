import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProductsData } from "../../utils/models/products.model";

export const fetchAsyncProductsData = createAsyncThunk(
  "products/fetchAsyncProductsData",
  async (productCategoryId: string) => {
    let response: IProductsData[] = await fetch("/data/products.json")
      .then((data) => data.json())
      .then((data: IProductsData[]) =>
        data.filter((item) => item.productCategoryId === productCategoryId)
      );
    return response;
  }
);

const initialState: {
  productsData: IProductsData[];
  productCategory: string;
  loader: boolean;
} = {
  productsData: [],
  productCategory: "",
  loader: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAsyncProductsData.pending, (state) => {
        return { ...state, loader: true };
      })
      .addCase(fetchAsyncProductsData.fulfilled, (state, { payload }) => {
        return {
          ...state,
          productsData: payload,
          loader: false,
          productCategory: payload[0].productCategory,
        };
      });
  },
});

export default productsSlice.reducer;
