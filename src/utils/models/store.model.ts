import { IMenuItems } from "./menu.model";
import { IProductDetailData } from "./product-detail.model";

export interface IStore {
  menu: {
    menuItems: IMenuItems[];
  };
  productDetail: {
    productDetailData: IProductDetailData;
    loader: boolean;
    loadReviews: boolean;
  };
}
