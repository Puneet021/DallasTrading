import { Component, ReactNode } from "react";
import styles from "./contact-us.module.scss";
import { IContactUsProps, IContactUsStates } from "./contact-us.constants";
import ShadowHeading from "../../components/common/headings/shadowHeading/shadowHeading";
import BreadCrumb from "../../components/common/breadCrumb/breadCrumb";

class ContactUs extends Component<IContactUsProps, IContactUsStates> {
  render(): ReactNode {
    return (
      <div className={styles.contactUsContainer}>
        <BreadCrumb
          items={[
            { moduleName: "Home", link: "/home" },
            { moduleName: "Contact Us", link: "" },
          ]}
        />
        <ShadowHeading
          headingText1="Contact"
          headingText2="Us"
          backShadowHeading={false}
        />
      </div>
    );
  }
}

export default ContactUs;
