import { NavigateFunction, Params } from "react-router-dom";

export interface IHeaderProps {
  router: {
    location: Location;
    navigate: NavigateFunction;
    params: Readonly<Params<string>>;
  };
}
export interface IHeaderStates {
  width: number;
  isMobileWidth: boolean;
  openMenu: boolean;
  toggleSearch: boolean;
  searchVal: string;
}
