import { Component, ReactNode } from "react";
import styles from "./our-team.module.scss";
import { IOurTeamProps, IOurTeamStates } from "./our-team.constants";
import ShadowHeading from "../../components/common/headings/shadowHeading/shadowHeading";
import prakash_ahuja_img from "./images/Prakash_Ahuja.png";
import ibrahim_somji_img from "./images/Ibrahim_Somji.png";
import sonu_s_thakur_img from "./images/Sonu_S_Thakur.png";
import SideImageCard from "../../components/common/cards/sideImageCard/sideImageCard";
import BreadCrumb from "../../components/common/breadCrumb/breadCrumb";

class OurTeam extends Component<IOurTeamProps, IOurTeamStates> {
  render(): ReactNode {
    return (
      <div className={styles.ourTeamPageContainer}>
        <BreadCrumb
          items={[
            { moduleName: "Home", link: "/home" },
            { moduleName: "Our Team", link: "" },
          ]}
        />
        <ShadowHeading
          headingText1="Our"
          headingText2="Team"
          backShadowHeading={false}
        />
        <div className={styles.teamDetails}>
          <SideImageCard
            image={prakash_ahuja_img}
            altTextImg="prakash_ahuja_img"
            details={{
              name: "Prakash Ahuja",
              position: "Chairman and Founder",
              bio: "Prakash Ahuja is one of the pioneers in the electrical field with over three decades of experience as an entrepreneur. He has a reputation for being a visionary and business is a passion for him.",
            }}
          />
          <SideImageCard
            image={ibrahim_somji_img}
            altTextImg="ibrahim_somji_img"
            details={{
              name: "Ibrahim Somji",
              position: "Director",
              bio: "Ibrahim Somji has been a first generation entrepreneur in the field of electrical products and a leading builder, having built certain very prestigious towers. He is known among the business community as an astute and straight forward man.",
            }}
          />
          <SideImageCard
            image={sonu_s_thakur_img}
            altTextImg="sonu_s_thakur_img"
            details={{
              name: "Sonu S Thakur",
              position: "Chief Executive Officer",
              bio: "Sonu S Thakur is a Chartered Accountant, Company Secretary and Certified Public accountant. He comes with more than two and half decades of experience. He had worked as Chief Financial Officer with Multinational companies and joined as CEO for Dallas Group in January 2015.",
            }}
          />
        </div>
      </div>
    );
  }
}

export default OurTeam;
