import { Component, ReactNode } from "react";
import styles from "./search-page.module.scss";
import { ISearchPageProps, ISearchPageStates } from "./search-page.constants";
import LightWeightHeading from "../../components/common/headings/lightWeightHeading/lightWeightHeading";
import { MenuItem, Select } from "@mui/material";
import SearchResults from "./search-results/search-results";

class SearchPage extends Component<ISearchPageProps, ISearchPageStates> {
  constructor(props: ISearchPageProps) {
    super(props);
    this.state = {
      selectVal: 1,
    };
  }
  componentDidMount(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render(): ReactNode {
    return (
      <div className={styles.searchPageContainer}>
        <div className={styles.headDiv}>
          <div className={styles.leftText}>
            <LightWeightHeading
              headingText1="Search Results "
              headingText2=""
            />
            <p className={styles.showingRes}>Showing 4 results</p>
          </div>
          <Select
            className={styles.selectBox}
            value={this.state.selectVal}
            onChange={(e) => this.setState({ selectVal: +e.target.value })}
          >
            <MenuItem key={`text_item_${1}`} value={1}>
              Default Sorting
            </MenuItem>
            <MenuItem key={`text_item_${2}`} value={2}>
              Sort by popularity
            </MenuItem>
            <MenuItem key={`text_item_${3}`} value={3}>
              Sort by average rating
            </MenuItem>
            <MenuItem key={`text_item_${4}`} value={4}>
              Sort by newness
            </MenuItem>
            <MenuItem key={`text_item_${5}`} value={5}>
              Sort by price: low to high
            </MenuItem>
            <MenuItem key={`text_item_${6}`} value={6}>
              Sort by price: high to low
            </MenuItem>
          </Select>
        </div>
        <SearchResults />
      </div>
    );
  }
}

export default SearchPage;
