import { IStore } from "../../utils/models/store.model";

export const getMenuItems = (state: IStore) => state.menu.menuItems;

export const getSearchValue = (state: IStore) => state.menu.searchVal;
