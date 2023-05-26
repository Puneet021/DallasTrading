import { IMenuItems } from "./menu.model";

export interface IStore {
  menu: {
    menuItems: IMenuItems[];
  };
}
