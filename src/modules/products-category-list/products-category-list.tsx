import { Component, ReactNode } from "react";
import styles from "./products-category-list.module.scss";
import {
  IProductsCategoryListProps,
  IProductsCategoryListStates,
} from "./products-category-list.constants";
import ShadowHeading from "../../components/common/headings/shadowHeading/shadowHeading";
import DisplayProductCategories from "./display-product-categories/display-product-categories";
import BreadCrumb from "../../components/common/breadCrumb/breadCrumb";

class ProductsCategoryList extends Component<
  IProductsCategoryListProps,
  IProductsCategoryListStates
> {
  render(): ReactNode {
    return (
      <div className={styles.productsPage}>
        <BreadCrumb
          items={[
            { moduleName: "Home", link: "/home" },
            { moduleName: "Our Products", link: "" },
          ]}
        />
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
