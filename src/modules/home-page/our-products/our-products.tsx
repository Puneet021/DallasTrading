import { Component, ReactNode } from "react";
import styles from "./our-products.module.scss";
import {
  IOurProductsProps,
  IOurProductsStates,
} from "./our-products.constants";
import ShadowHeading from "../../../components/common/headings/shadowHeading/shadowHeading";
import StylishUpDownCard from "../../../components/common/cards/stylishUpDownCard/stylishUpDownCard";
import fan_img from "./../../../images/fan.jpg";
import cables_img from "./../../../images/cables.jpg";
import pipes_img from "./../../../images/pipes.jpg";
import wires_img from "./../../../images/wires.jpg";

class OurProducts extends Component<IOurProductsProps, IOurProductsStates> {
  render(): ReactNode {
    return (
      <div className={styles.ourProducts}>
        <ShadowHeading headingText1="Our" headingText2="Products" />
        <div className={styles.products}>
          <div className={styles.col1}>
            <StylishUpDownCard altText="card1" image={fan_img} />
            <StylishUpDownCard altText="card2" image={cables_img} />
          </div>
          <div className={styles.col2}>
            <StylishUpDownCard altText="card3" image={pipes_img} />
            <StylishUpDownCard altText="card2" image={wires_img} />
          </div>
        </div>
      </div>
    );
  }
}

export default OurProducts;
