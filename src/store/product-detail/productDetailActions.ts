import { IStore } from "../../utils/models/store.model";
import { productDetailImages } from "./productdetailImages/productdetailImages";

export const getProductDetailLoader = (state: IStore) =>
  state.productDetail.loader;

export const getProductDetails = (state: IStore) => {
  return {
    productId: state.productDetail.productDetailData.id,
    productName: state.productDetail.productDetailData.productName,
    productCategory: state.productDetail.productDetailData.categoryName,
    productImage: productDetailImages[state.productDetail.productDetailData.id],
    description: state.productDetail.productDetailData.description,
  };
};

export const getProductDetailTableData = (state: IStore) =>
  state.productDetail.productDetailData.productDetailTableData;

export const getProductDetailReviews = (state: IStore) =>
  state.productDetail.productDetailData.customerReviews;