import { IStore } from "../../utils/models/store.model";
import BW_Cable_Gland from "./productdetailImages/BW-Cable-Gland.png";
import BW_Cable_Glands from "./productdetailImages/BW-Cable-Glands.png";
import A1A2_Cable_Gland from "./productdetailImages/A1A2-Cable-Gland.png";
import A1A2_Cable_Glands from "./productdetailImages/A1A2-Cable-Glands.png";

export const getProductDetailLoader = (state: IStore) =>
  state.productDetail.loader;

export const getProductDetails = (state: IStore) => {
  const _Img = "";
  const BW_Cable_Gland_Img = BW_Cable_Gland;
  const BW_Cable_Glands_Img = BW_Cable_Glands;
  const A1A2_Cable_Gland_Img = A1A2_Cable_Gland;
  const A1A2_Cable_Glands_Img = A1A2_Cable_Glands;
  return {
    productId: state.productDetail.productDetailData.id,
    productName: state.productDetail.productDetailData.productName,
    productCategory: state.productDetail.productDetailData.categoryName,
    productImage: eval(state.productDetail.productDetailData?.id + "_Img"),
    description: state.productDetail.productDetailData.description,
  };
};

export const getProductDetailTableData = (state: IStore) =>
  state.productDetail.productDetailData.productDetailTableData;

export const getProductDetailReviews = (state: IStore) =>
  state.productDetail.productDetailData.customerReviews;
