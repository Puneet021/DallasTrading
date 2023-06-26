import { Component, ReactNode } from "react";
import styles from "./centificates.module.scss";
import certificate_img1 from "./images/Dallas-trading-UAE.jpg";
import certificate_img2 from "./images/Dallas-trading-Oman.jpg";
import certificate_img3 from "./images/Dallas-trading-Qatar.jpg";
import {
  ICertificatesProps,
  ICertificatesStates,
} from "./certificates.constants";
import ShadowHeading from "../../components/common/headings/shadowHeading/shadowHeading";
import BreadCrumb from "../../components/common/breadCrumb/breadCrumb";

class Certificates extends Component<ICertificatesProps, ICertificatesStates> {
  componentDidMount(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render(): ReactNode {
    return (
      <div className={styles.certificatesContainer}>
        <BreadCrumb
          items={[
            { moduleName: "Home", link: "/home" },
            { moduleName: "Certificates", link: "" },
          ]}
        />
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
              OMAN
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
              QATAR
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Certificates;
