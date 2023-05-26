import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProductDetailData } from "../../utils/models/product-detail.model";

export const fetchAsyncProductDetailData = createAsyncThunk(
  "productDetail/fetchAsyncProductDetailData",
  async (productId: string) => {
    let response: IProductDetailData = await fetch("/product-details.json")
      .then((data) => data.json())
      .then(
        (data: IProductDetailData[]) =>
          data?.filter((item) => item.id === productId)[0]
      );
    return response;
  }
);

const initialState: {
  productDetailData: IProductDetailData;
  loader: boolean;
} = {
  productDetailData: {
    id: "",
    productName: "",
    categoryName: "",
    description: {
      Size: "",
      Standard: "",
      Application: "",
      Function: "",
      Material: "",
      optionalThreads: "",
      Finish: "",
      operatingTemp: "",
      Accessories: "",
    },
    productDetailTableData: [],
    customerReviews: [],
  },
  loader: false,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAsyncProductDetailData.pending, (state) => {
        return { ...state, loader: true };
      })
      .addCase(fetchAsyncProductDetailData.fulfilled, (state, { payload }) => {
        return { ...state, productDetailData: payload, loader: false };
      });
  },
});

export default productDetailSlice.reducer;
