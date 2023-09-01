import { Component, ReactNode } from "react";
import styles from "./our-projects.module.scss";
import ShadowHeading from "../../components/common/headings/shadowHeading/shadowHeading";
import {
  IOurProjectsProps,
  IOurProjectsStates,
} from "./our-projects.constants";
import BreadCrumb from "../../components/common/breadCrumb/breadCrumb";
import Al_Habtoor_city from "./../../images/Al Habtoor city.jpg";
import Dubai_Fountain_project from "./../../images/Dubai Fountain project.jpg";
import Future_museum from "./../../images/Future museum.jpg";
import Palm_Jumeirah from "./../../images/Palm Jumeirah.jpg";
import The_Atlantis_Royal from "./../../images/The Atlantis Royal.jpg";
import jumeirah_park_villas_project from "./../../images/jumeirah park villas-project.jpg";
import jumeirah_park_villas_project1 from "./../../images/jumeirah park villas-project (5).jpg";
import { ImageList, ImageListItem } from "@mui/material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

class OurProjects extends Component<IOurProjectsProps, IOurProjectsStates> {
  componentDidMount(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  itemData = [
    {
      img: Al_Habtoor_city,
      title: "Al_Habtoor_city",
      rows: 2,
      cols: 2,
    },
    {
      img: The_Atlantis_Royal,
      title: "The_Atlantis_Royal",
    },
    {
      img: jumeirah_park_villas_project1,
      title: "jumeirah_park_villas_project1",
    },
    {
      img: Palm_Jumeirah,
      title: "Palm_Jumeirah",
      cols: 2,
    },
    {
      img: jumeirah_park_villas_project,
      title: "jumeirah_park_villas_project",
      cols: 2,
    },
    {
      img: Dubai_Fountain_project,
      title: "Dubai_Fountain_project",
      rows: 2,
      cols: 2,
    },
    {
      img: Future_museum,
      title: "Future_museum",
      cols: 2,
    },
  ];
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
        <div className={styles.projects}>
          <ImageList
            className={styles.imageList}
            variant="quilted"
            cols={4}
          >
            {this.itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 250, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    );
  }
}

export default OurProjects;
