import { Component, ReactNode } from "react";
import styles from "./search-results.module.scss";
import {
  ISearchResultsProps,
  ISearchResultsStates,
} from "./search-results.constants";
import Aos from "aos";
import "aos/dist/aos.css";
import anyImage from "./../../../images/category1.png";
import anyImage2 from "./../../../images/category2.png";
import anyImage3 from "./../../../images/category3.png";

class SearchResults extends Component<
  ISearchResultsProps,
  ISearchResultsStates
> {
  componentDidMount(): void {
    Aos.init();
  }
  render(): ReactNode {
    return (
      <div
        className={styles.searchResultsContainer}
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-offset="50"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className={styles.resultItem}>
          <img
            className={styles.itemImage}
            src={anyImage}
            alt="will implement later"
          />
          <h4 className={styles.itemText}>A1/A2 Cable Gland</h4>
        </div>
        <div className={styles.resultItem}>
          <img
            className={styles.itemImage}
            src={anyImage2}
            alt="will implement later"
          />
          <h4 className={styles.itemText}>A1/A2 Cable Gland</h4>
        </div>
        <div className={styles.resultItem}>
          <img
            className={styles.itemImage}
            src={anyImage3}
            alt="will implement later"
          />
          <h4 className={styles.itemText}>A1/A2 Cable Gland</h4>
        </div>
      </div>
    );
  }
}

export default SearchResults;
