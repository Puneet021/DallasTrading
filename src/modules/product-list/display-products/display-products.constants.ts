import { NavigateFunction, Params } from "react-router-dom";

export interface IDisplayProductsProps {
  router: {
    location: Location;
    navigate: NavigateFunction;
    params: Readonly<Params<string>>;
  };
}
export interface IDisplayProductsStates {}
