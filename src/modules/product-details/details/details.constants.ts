import { IProductDetailDescription } from "../../../utils/models/product-detail.model";

export interface IDetailsProps {
  details: {
    productId: string;
    productName: string;
    detail: string[];
    Specification: {
      extraSpecTitle: string;
      extraSpec: string[];
      specification: string[];
    }[];
    company: string[];
    companyImg: string[];
    productCategory: string;
    productImage: string;
    description: IProductDetailDescription;
  };
}
export interface IDetailsStates {}
