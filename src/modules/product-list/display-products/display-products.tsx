import { Component, ReactNode } from "react";
import styles from "./display-products.module.scss";
import {
  IDisplayProductsProps,
  IDisplayProductsStates,
} from "./display-products.constants";
import product_img1 from "./../../../images/product1.png";
import product_img2 from "./../../../images/product2.png";
import product_img3 from "./../../../images/product3.png";
import product_img4 from "./../../../images/product4.png";
import ProducCard from "../../../components/common/cards/productCard/productCard";
import withRouter from "../../../components/common/withRouterComponent/withRouter";

class DisplayProducts extends Component<
  IDisplayProductsProps,
  IDisplayProductsStates
> {
  productList: {
    id: number;
    title: string;
    info: string;
    image: string;
  }[] = [
    {
      id: 0,
      title: "A1/A2 Cable Gland",
      info: "As a leading supplier of Industrial and Commercial Grade Air Circulators, BREEZE® is recognized throughout the industry for the superior quality and performance of its products.",
      image: product_img1,
    },
    {
      id: 1,
      title: "A1/A2 Cable Glands",
      info: "Decoduct conduits are manufactured from super high impact uPVC compound suitable to withstand harsh environments. Conduits can be bent with the use of a bending spring.",
      image: product_img2,
    },
    {
      id: 2,
      title: "BW Cable Gland",
      info: "Can be used indoors or outdoors in cable ducts, cable trays, conduits or underground locations under mechanical stresses in power and switching stations, local distribution systems, industrial plants and commercial buildings.",
      image: product_img3,
    },
    {
      id: 3,
      title: "BW Cable Gland",
      info: "Cable Ties are manufactured with special additives imparting resistant to UV radiation. Provides a secure locking which will not slip, come off or slacken.",
      image: product_img4,
    },
  ];
  render(): ReactNode {
    return (
      <div className={styles.displayContainer}>
        <div className={styles.displayRow}>
          {this.productList.map((item) => (
            <ProducCard
              key={item.id}
              data={item}
              handleClick={() => this.props.router.navigate("./" + item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(DisplayProducts);
