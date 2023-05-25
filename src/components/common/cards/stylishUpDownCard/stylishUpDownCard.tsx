import { Component, ReactNode } from "react";
import styles from "./stylishUpDownCard.module.scss";
import {
  IStylishUpDownCardProps,
  IStylishUpDownCardStates,
} from "./stylishUpDownCard.constants";

class StylishUpDownCard extends Component<
  IStylishUpDownCardProps,
  IStylishUpDownCardStates
> {
  render(): ReactNode {
    const { altText, image } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.left}>
          <img className={styles.img} src={image} alt={altText} />
        </div>
        <div className={styles.right}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
    );
  }
}

export default StylishUpDownCard;
