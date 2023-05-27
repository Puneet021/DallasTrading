import { Component, ReactNode } from "react";
import styles from "./stylishUpDownCard.module.scss";
import {
  IStylishUpDownCardProps,
  IStylishUpDownCardStates,
} from "./stylishUpDownCard.constants";
import Aos from "aos";
import "aos/dist/aos.css";

class StylishUpDownCard extends Component<
  IStylishUpDownCardProps,
  IStylishUpDownCardStates
> {
  componentDidMount(): void {
    Aos.init();
  }
  render(): ReactNode {
    const { altText, image } = this.props;
    return (
      <div
        className={styles.card}
        data-aos="zoom-in-up"
        data-aos-delay="20"
        data-aos-offset="100"
        data-aos-duration="1000"
      >
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
