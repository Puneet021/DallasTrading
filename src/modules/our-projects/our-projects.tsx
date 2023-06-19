import { Component, ReactNode } from "react";
import styles from "./our-projects.module.scss";
import ShadowHeading from "../../components/common/headings/shadowHeading/shadowHeading";
import {
  IOurProjectsProps,
  IOurProjectsStates,
} from "./our-projects.constants";
import BreadCrumb from "../../components/common/breadCrumb/breadCrumb";

class OurProjects extends Component<IOurProjectsProps, IOurProjectsStates> {
  componentDidMount(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render(): ReactNode {
    return (
      <div className={styles.ourProjectsContainer}>
        <BreadCrumb
          items={[
            { moduleName: "Home", link: "/home" },
            { moduleName: "Our Projects", link: "" },
          ]}
        />
        <ShadowHeading
          headingText1="Our"
          headingText2="Projects"
          backShadowHeading={false}
        />
      </div>
    );
  }
}

export default OurProjects;
