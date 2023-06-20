import { Component, ReactNode } from "react";
import styles from "./details.module.scss";
import { connect } from "react-redux";
import { IStore } from "../../../utils/models/store.model";
import { getProductDetails } from "../../../store/product-detail/productDetailActions";
import { IDetailsProps, IDetailsStates } from "./details.constants";
import CustomAccordian from "./accordian/accordian";

class Details extends Component<IDetailsProps, IDetailsStates> {
  render(): ReactNode {
    const { details } = this.props;
    return (
      <div className={styles.detailsContainer}>
        <div className={styles.leftContainer}>
          <img
            className={styles.productImg}
            src={details?.productImage}
            alt={details?.productId + "_image"}
          />
        </div>
        <div className={styles.rightContainer}>
          <h2 className={styles.productName}>{details?.productName}</h2>
          {details?.Specification?.map((specification, index) => (
            <div key={index} className={styles.specificationCont}>
              {specification?.extraSpecTitle ? (
                <h5
                  className={styles.specification}
                  style={{ fontWeight: "500" }}
                >
                  {specification?.extraSpecTitle}
                </h5>
              ) : null}
              {specification?.extraSpec?.map((spec, i) => (
                <p key={i} className={styles.spec}>
                  {spec}
                </p>
              ))}
              {specification?.specification?.length ? (
                <h5 className={styles.specification}>Specification :</h5>
              ) : null}
              {specification?.specification?.map((spec, i) => (
                <p key={i} className={styles.spec}>
                  {spec}
                </p>
              ))}
            </div>
          ))}
          <h5 className={styles.categoryName}>{details?.productCategory}</h5>
          {details?.companyImg?.map((img, i) => (
            <img
              key={i}
              className={styles.companyImage}
              src={img}
              alt={details.company[i]}
            />
          ))}
          {details?.detail?.map((det, i) => (
            <p
              key={i}
              className={styles.details}
              dangerouslySetInnerHTML={{ __html: det }}
            ></p>
          ))}
          {details?.description?.length ? (
            <h5 className={styles.description}>Description :</h5>
          ) : null}
          {details?.description?.map((desc: any, i: number) => (
            <>
              <ul key={i}>
                {Object.entries(desc).map((entry: any, j: number) => {
                  if (entry[0].charAt(0) === "*") return null;
                  if (entry[1] === "")
                    return <h4 className={styles.onlyTitle}>{entry[0]}</h4>;
                  return (
                    <li key={j} className={styles.descriptionData}>
                      {entry[0]} : {entry[1]}
                    </li>
                  );
                })}
              </ul>
              <CustomAccordian
                key={`key_${i}`}
                application={desc["*Application"]}
                construction={desc["*Construction"]}
                technicalData={desc["*TechnicalData"]}
                characteristics={desc["*Characteristics"]}
                design={desc["*Design"]}
                specification={desc["*Specifications"]}
                designFeatures={desc["*Design Features"]}
              />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default connect((state: IStore) => ({
  details: getProductDetails(state),
}))(Details);
