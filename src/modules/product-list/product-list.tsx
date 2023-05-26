import { Component, ReactNode } from "react";
import styles from "./product-list.module.scss";
import {
  IProductListProps,
  IProductListStates,
} from "./product-list.constants";
import DisplayProducts from "./display-products/display-products";
import LightWeightHeading from "../../components/common/headings/lightWeightHeading/lightWeightHeading";

class ProductList extends Component<IProductListProps, IProductListStates> {
  render(): ReactNode {
    return (
      <div className={styles.productListContainer}>
        <LightWeightHeading
          headingText1="Industrial "
          headingText2="Cable Glands"
        />
        <DisplayProducts />
      </div>
    );
  }
}

export default ProductList;
