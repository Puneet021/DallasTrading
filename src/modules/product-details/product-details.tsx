import { Component, ReactNode } from "react";
import styles from "./product-details.module.scss";
import {
  IProductDetailsProps,
  IProductDetailsStates,
} from "./product-details.constants";
import LightWeightHeading from "../../components/common/headings/lightWeightHeading/lightWeightHeading";

class ProductDetails extends Component<
  IProductDetailsProps,
  IProductDetailsStates
> {
  render(): ReactNode {
    return (
      <div className={styles.productDetailsContainer}>
        <LightWeightHeading headingText1="Product " headingText2="Details" />
      </div>
    );
  }
}

export default ProductDetails;
