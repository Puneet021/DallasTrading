import { Component, ReactNode } from "react";
import styles from "./centificates.module.scss";
import certificate_img1 from "./images/certificate1.png";
import certificate_img2 from "./images/certificate2.png";
import certificate_img3 from "./images/certificate3.png";
import {
  ICertificatesProps,
  ICertificatesStates,
} from "./certificates.constants";
import ShadowHeading from "../../components/common/headings/shadowHeading/shadowHeading";

class Certificates extends Component<ICertificatesProps, ICertificatesStates> {
  render(): ReactNode {
    return (
      <div className={styles.certificatesContainer}>
        <ShadowHeading
          headingText1="Certificates"
          headingText2=""
          backShadowHeading={false}
        />
        <div className={styles.certificates}>
          <div>
            <img
              className={styles.certificate}
              src={certificate_img1}
              alt="certificate_img1"
            />
            <p className={styles.pTag}>
              ISO 9001:2008 <br />
              UAE
            </p>
          </div>
          <div>
            <img
              className={styles.certificate}
              src={certificate_img2}
              alt="certificate_img2"
            />
            <p className={styles.pTag}>
              ISO 9001:2008 <br />
              UAE
            </p>
          </div>
          <div>
            <img
              className={styles.certificate}
              src={certificate_img3}
              alt="certificate_img3"
            />
            <p className={styles.pTag}>
              ISO 9001:2008 <br />
              UAE
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Certificates;
