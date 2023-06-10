import { Component, ReactNode } from "react";
import styles from "./our-partners.module.scss";
import {
  IOurPartnersProps,
  IOurPartnersStates,
} from "./our-partners.constants";
import Aos from "aos";
import "aos/dist/aos.css";
import ShadowHeading from "../../../components/common/headings/shadowHeading/shadowHeading";
import Partner1 from "./../../../images/partner1.svg";
import Partner2 from "./../../../images/partner2.svg";
import Partner3 from "./../../../images/partner3.svg";
import Partner4 from "./../../../images/partner4.svg";
import Partner5 from "./../../../images/partner5.svg";
import Partner6 from "./../../../images/partner6.svg";
import Partner7 from "./../../../images/partner7.svg";
import Partner8 from "./../../../images/partner8.svg";
import Partner9 from "./../../../images/partner9.svg";
import Partner10 from "./../../../images/partner10.svg";
import Partner11 from "./../../../images/partner11.svg";

class OurPartners extends Component<IOurPartnersProps, IOurPartnersStates> {
  partnersList = [
    [
      { image: Partner1, altText: "partner_1", delay: 0 },
      { image: Partner2, altText: "partner_2", delay: 100 },
      { image: Partner3, altText: "partner_3", delay: 200 },
      { image: Partner4, altText: "partner_4", delay: 300 },
    ],
    [
      { image: Partner5, altText: "partner_5", delay: 100 },
      { image: Partner6, altText: "partner_6", delay: 200 },
      { image: Partner7, altText: "partner_7", delay: 300 },
    ],
    [
      { image: Partner8, altText: "partner_8", delay: 200 },
      { image: Partner9, altText: "partner_9", delay: 300 },
      { image: Partner10, altText: "partner_10", delay: 400 },
      { image: Partner11, altText: "partner_11", delay: 500 },
    ],
  ];
  componentDidMount(): void {
    Aos.init();
  }
  render(): ReactNode {
    return (
      <div
        className={styles.ourPartners}
        style={{
          paddingRight: this.props.isSidePaddingNeeded === false ? "0" : "",
          paddingLeft: this.props.isSidePaddingNeeded === false ? "0" : "",
        }}
      >
        <div className={styles.heading}>
          <ShadowHeading headingText1="Our" headingText2="Partners" />
        </div>
        <table className={styles.partners}>
          <tbody>
            {this.partnersList.map((list, i) => (
              <tr key={i} className={styles.row}>
                {list.map((item, j) => {
                  return (
                    <td
                      key={j}
                      data-aos="fade-in" // need fade left here
                      data-aos-delay={item.delay}
                      data-aos-offset="100"
                      data-aos-duration="1500"
                      data-aos-once="true"
                    >
                      <img
                        className={styles.partnerImg}
                        src={item.image}
                        alt={item.altText}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OurPartners;
