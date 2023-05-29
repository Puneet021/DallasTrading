import { Component, ReactNode } from "react";
import styles from "./sideImageCard.module.scss";
import {
  ISideImageCardProps,
  ISideImageCardStaes,
} from "./sideImageCard.constants";

class SideImageCard extends Component<
  ISideImageCardProps,
  ISideImageCardStaes
> {
  render(): ReactNode {
    const {
      image,
      altTextImg,
      details: { name, position, bio },
    } = this.props;
    return (
      <div className={styles.sideImageCardContainer}>
        <img className={styles.img} src={image} alt={altTextImg} />
        <div className={styles.details}>
          <h2 className={styles.name}>{name}</h2>
          <h5 className={styles.position}>{position}</h5>
          <p className={styles.bio}>{bio}</p>
        </div>
      </div>
    );
  }
}

export default SideImageCard;
