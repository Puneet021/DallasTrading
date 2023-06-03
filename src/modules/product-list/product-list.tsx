import { Component, ReactNode } from "react";
import styles from "./product-list.module.scss";
import {
  IProductListProps,
  IProductListStates,
} from "./product-list.constants";
import DisplayProducts from "./display-products/display-products";
import LightWeightHeading from "../../components/common/headings/lightWeightHeading/lightWeightHeading";
import BreadCrumb from "../../components/common/breadCrumb/breadCrumb";
import { Select, MenuItem } from "@mui/material";

class ProductList extends Component<IProductListProps, IProductListStates> {
  constructor(props: IProductListProps) {
    super(props);
    this.state = {
      selectVal: 1,
    };
  }
  render(): ReactNode {
    return (
      <div className={styles.productListContainer}>
        <BreadCrumb
          items={[
            { moduleName: "Home", link: "/home" },
            { moduleName: "Our Products", link: "./../" },
            { moduleName: "Cable Management System", link: "" },
          ]}
        />
        <div className={styles.headDiv}>
          <div className={styles.leftText}>
            <LightWeightHeading
              headingText1="Industrial "
              headingText2="Cable Glands"
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
        <DisplayProducts />
      </div>
    );
  }
}

export default ProductList;
