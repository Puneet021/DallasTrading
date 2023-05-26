import { Component, ReactNode } from "react";
import styles from "./products-category-list.module.scss";
import {
  IProductsCategoryListProps,
  IProductsCategoryListStates,
} from "./products-category-list.constants";
import ShadowHeading from "../../components/common/headings/shadowHeading/shadowHeading";
import DisplayProductCategories from "./display-product-categories/display-product-categories";

class ProductsCategoryList extends Component<
  IProductsCategoryListProps,
  IProductsCategoryListStates
> {
  render(): ReactNode {
    return (
      <div className={styles.productsPage}>
        <ShadowHeading
          headingText1="Our"
          headingText2="Products"
          backShadowHeading={false}
        />
        <DisplayProductCategories />
      </div>
    );
  }
}

export default ProductsCategoryList;
