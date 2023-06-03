import { Component, ReactNode } from "react";
import styles from "./details.module.scss";
import { connect } from "react-redux";
import { IStore } from "../../../utils/models/store.model";
import { getProductDetails } from "../../../store/product-detail/productDetailActions";
import { IDetailsProps, IDetailsStates } from "./details.constants";
import temp from "./../../../images/partner5.svg";

class Details extends Component<IDetailsProps, IDetailsStates> {
  render(): ReactNode {
    const { details } = this.props;
    return (
      <div className={styles.detailsContainer}>
        <div className={styles.leftContainer}>
          <img
            className={styles.productImg}
            src={details.productImage}
            alt={details.productId + "_image"}
          />
        </div>
        <div className={styles.rightContainer}>
          <h2 className={styles.productName}>{details.productName}</h2>
          <h5 className={styles.categoryName}>{details.productCategory}</h5>
          <img className={styles.companyImage} src={temp} alt="temp" />
          <h5 className={styles.description}>Description</h5>
          <ul>
            {Object.entries(details.description).map((entry, i) => (
              <li key={i} className={styles.descriptionData}>
                {entry[0]} : {entry[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect((state: IStore) => ({
  details: getProductDetails(state),
}))(Details);