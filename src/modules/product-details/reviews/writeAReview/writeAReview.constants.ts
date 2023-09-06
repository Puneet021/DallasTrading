import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { IProductDetailReviewsData } from "../../../../utils/models/product-detail.model";

export interface IwriteAReviewProps {
  addComment: ActionCreatorWithPayload<
    IProductDetailReviewsData,
    "productDetail/addComment"
  >;
  customerReviewsData: IProductDetailReviewsData[];
}
export interface IwriteAReviewStates {
  rating: string | number;
  customerName: string;
  email: string;
  comment: string;
}
