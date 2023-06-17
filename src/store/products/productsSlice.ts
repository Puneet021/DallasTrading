import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProductsData } from "../../utils/models/products.model";

export const fetchAsyncProductsData = createAsyncThunk(
  "products/fetchAsyncProductsData",
  async () => {
    let response: IProductsData[] = await fetch("/data/products.json")
      .then((data) => data.json())
      .then((data: IProductsData[]) => data);
    return response;
  }
);

const initialState: {
  productsData: IProductsData[];
  loader: boolean;
} = {
  productsData: [],
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
        return { ...state, productsData: payload, loader: false };
      });
  },
});

export default productsSlice.reducer;
