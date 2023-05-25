import { Component, ReactNode } from "react";
import { IHeaderProps, IHeaderStates } from "./header.constants";
import styles from "./header.module.scss";
import headerLogo from "./../../images/Dallas_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

class Header extends Component<IHeaderProps, IHeaderStates> {
  render(): ReactNode {
    return (
      <div className={styles.header}>
        <img className={styles.logo} src={headerLogo} alt="Dallas logo" />
        <div className={styles.rightSection}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search"
              className={styles.inputSearch}
            />
            <SearchIcon className={styles.searchIcon} />
          </div>
          <button className={styles.callUsBtn}>Call Us</button>
          <div className={styles.menuButton}>
            <MenuIcon className={styles.menuIcon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
