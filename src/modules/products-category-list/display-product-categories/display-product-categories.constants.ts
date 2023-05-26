import { NavigateFunction, Params } from "react-router-dom";

export interface IDisplayProductCategoriesProps {
  router: {
    location: Location;
    navigate: NavigateFunction;
    params: Readonly<Params<string>>;
  };
}
export interface IDisplayProductCategoriesStates {}