import { NavigateFunction, Params } from "react-router-dom";

export interface IProductDetailsProps {
  router: {
    location: Location;
    navigate: NavigateFunction;
    params: Readonly<Params<string>>;
  };
  loader: boolean;
  fetchAsyncProductDetailData: any;
}
export interface IProductDetailsStates {}
