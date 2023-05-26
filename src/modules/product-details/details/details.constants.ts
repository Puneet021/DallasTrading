import { IProductDetailDescription } from "../../../utils/models/product-detail.model";

export interface IDetailsProps {
  details: {
    productId: string;
    productName: string;
    productCategory: string;
    productImage: string;
    description: IProductDetailDescription;
  };
}
export interface IDetailsStates {}
