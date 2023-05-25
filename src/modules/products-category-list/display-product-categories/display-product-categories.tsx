import { Component, ReactNode } from "react";
import styles from "./display-product-categories.module.scss";
import {
  IDisplayProductCategoriesProps,
  IDisplayProductCategoriesStates,
} from "./display-product-categories.constants";
import ProducCard from "../../../components/common/cards/productCard/productCard";
import category_img1 from "./../../../images/category1.png";
import category_img2 from "./../../../images/category2.png";
import category_img3 from "./../../../images/category3.png";
import category_img4 from "./../../../images/category4.png";

class DisplayProductCategories extends Component<
  IDisplayProductCategoriesProps,
  IDisplayProductCategoriesStates
> {
  productCategoryList: {
    id: number;
    title: string;
    info: string;
    image: string;
  }[] = [
    {
      id: 0,
      title: "Industrial Fans",
      info: "As a leading supplier of Industrial and Commercial Grade Air Circulators, BREEZE® is recognized throughout the industry for the superior quality and performance of its products.",
      image: category_img1,
    },
    {
      id: 1,
      title: "PVC Conduits",
      info: "Decoduct conduits are manufactured from super high impact uPVC compound suitable to withstand harsh environments. Conduits can be bent with the use of a bending spring.",
      image: category_img2,
    },
    {
      id: 2,
      title: "Cables",
      info: "Can be used indoors or outdoors in cable ducts, cable trays, conduits or underground locations under mechanical stresses in power and switching stations, local distribution systems, industrial plants and commercial buildings.",
      image: category_img3,
    },
    {
      id: 3,
      title: "Cable Ties",
      info: "Cable Ties are manufactured with special additives imparting resistant to UV radiation. Provides a secure locking which will not slip, come off or slacken.",
      image: category_img4,
    },
  ];
  render(): ReactNode {
    return (
      <div className={styles.displayContainer}>
        <div className={styles.displayRow}>
          {this.productCategoryList.map((item) => (
            <ProducCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayProductCategories;
