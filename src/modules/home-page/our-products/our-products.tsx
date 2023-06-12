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
import withRouter from "../../../components/common/withRouterComponent/withRouter";

class OurProducts extends Component<IOurProductsProps, IOurProductsStates> {
  constructor(props: IOurProductsProps) {
    super(props);
    this.handleClickOnCard = this.handleClickOnCard.bind(this);
  }
  handleClickOnCard() {
    this.props.router.navigate("/our-products/card");
  }
  render(): ReactNode {
    return (
      <div className={styles.ourProducts}>
        <div className={styles.heading}>
          <div className={styles.headingText}>
            <ShadowHeading headingText1="Our" headingText2="Products" />
          </div>
          <button
            className={styles.viewAllBtn}
            onClick={() => this.props.router.navigate("/our-products")}
          >
            View All
          </button>
        </div>
        <div className={styles.products}>
          <div className={styles.col1}>
            <StylishUpDownCard
              altText="card1"
              image={fan_img}
              handleClick={this.handleClickOnCard}
            />
            <StylishUpDownCard
              altText="card2"
              image={cables_img}
              handleClick={this.handleClickOnCard}
            />
          </div>
          <div className={styles.col2}>
            <StylishUpDownCard
              altText="card3"
              image={pipes_img}
              handleClick={this.handleClickOnCard}
            />
            <StylishUpDownCard
              altText="card2"
              image={wires_img}
              handleClick={this.handleClickOnCard}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(OurProducts);
