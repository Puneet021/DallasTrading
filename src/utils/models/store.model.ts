import { IMenuItems } from "./menu.model";
import { IOurTeamDetails } from "./our-team.model";
import { IProductDetailData } from "./product-detail.model";

export interface IStore {
  menu: {
    menuItems: IMenuItems[];
    searchVal: string;
  };
  productDetail: {
    productDetailData: IProductDetailData;
    loader: boolean;
    loadReviews: boolean;
  };
  ourTeam: {
    ourTeamDetailData: IOurTeamDetails[];
    loader: boolean;
  };
}
