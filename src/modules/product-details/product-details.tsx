import { Component, Fragment, ReactNode } from "react";
import styles from "./product-details.module.scss";
import {
  IProductDetailsProps,
  IProductDetailsStates,
} from "./product-details.constants";
import LightWeightHeading from "../../components/common/headings/lightWeightHeading/lightWeightHeading";
import withRouter from "../../components/common/withRouterComponent/withRouter";
import { connect } from "react-redux";
import { IStore } from "../../utils/models/store.model";
import { getProductDetailLoader } from "../../store/product-detail/productDetailActions";
import { fetchAsyncProductDetailData } from "../../store/product-detail/productDetailSlice";
import Details from "./details/details";
import ProductDetailTable from "./productDetailTable/productDetailTable";
import Reviews from "./reviews/reviews";
import BreadCrumb from "../../components/common/breadCrumb/breadCrumb";
import CustomLoader from "../../components/common/loader/loader";

class ProductDetails extends Component<
  IProductDetailsProps,
  IProductDetailsStates
> {
  componentDidMount(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const pathArr = this.props.router.location.pathname.split("/");
    this.props.fetchAsyncProductDetailData(pathArr[pathArr.length - 1]);
  }
  render(): ReactNode {
    return (
      <div className={styles.productDetailsContainer}>
        <BreadCrumb
          items={[
            { moduleName: "Home", link: "/home" },
            { moduleName: "Our Products", link: "./../.." },
            { moduleName: "Cable Management System", link: "./../" },
            { moduleName: "A1/A2 Cable Gland", link: "" },
          ]}
        />
        <LightWeightHeading headingText1="Product " headingText2="Details" />
        {this.props.loader ? (
          <div className={styles.loaderDiv}>
            <CustomLoader />
          </div>
        ) : (
          <Fragment>
            <Details />
            <ProductDetailTable />
            <Reviews />
          </Fragment>
        )}
      </div>
    );
  }
}

export default connect(
  (state: IStore) => ({
    loader: getProductDetailLoader(state),
  }),
  {
    fetchAsyncProductDetailData,
  }
)(withRouter(ProductDetails));
