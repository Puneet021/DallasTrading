import { IStore } from "../../utils/models/store.model";
import { productsImages } from "./productsImages/productsImages";

export const getProductsData = (state: IStore) =>
  state.products.productsData.map((item) => ({
    ...item,
    image: productsImages[item.image],
  }));

export const getProductsLoader = (state: IStore) => state.products.loader;
