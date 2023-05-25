import { Component, Fragment, ReactNode } from "react";
import { IHomeProps, IHomeStates } from "./home.constants";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app-routes";
import styles from "./home.module.scss";
import Header from "../header/header";
import Footer from "../footer/footer";

class Home extends Component<IHomeProps, IHomeStates> {
  render(): ReactNode {
    return (
      <Fragment>
        <div className={styles.home}>
          {/* Hash router (starts with # value)  */}
          <BrowserRouter>
            {/* Header remains same for entire web page */}
            <Header />
            {/* Main body of web app */}
            <div className={styles.homeBody}>
              <div className={styles.spaceHeader}></div>
              {/* All your modules goes here this section is dynamic (it change when path changes) */}
              <AppRoutes />
            </div>
            {/* Footer remains same for entire web page */}
            <Footer />
          </BrowserRouter>
        </div>
      </Fragment>
    );
  }
}

export default Home;
