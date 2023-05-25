import { Component, ReactNode } from "react";
import { IFooterProps, IFooterStates } from "./footer.constants";
import styles from "./footer.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

class Footer extends Component<IFooterProps, IFooterStates> {
  render(): ReactNode {
    const contacts = [
      {
        icon: <LocationOnIcon />,
        infoText:
          "Office No 1004, Sobha Ivory II, Business Bay P.O. Box 2028, Dubai",
      },
      {
        icon: <CallIcon />,
        infoText: "+971 4 363 5500",
      },
      {
        icon: <LocalPrintshopIcon />,
        infoText: "+971 4 429 0088",
      },
      {
        icon: <EmailIcon />,
        infoText: "info@dallastrading.net",
      },
    ];
    const socials = [
      {
        icon: <LinkedInIcon />,
        infoText: "LinkedIn",
      },
    ];
    return (
      <div className={styles.footer}>
        <div className={styles.infoList}>
          <div className={styles.contacts}>
            <h3 className={styles.heading}>Contacts</h3>
            <table className={styles.table}>
              <tbody>
                {contacts.map((contact, ind) => (
                  <tr key={ind} className={styles.row}>
                    <td className={styles.icon}>{contact.icon}</td>
                    <td className={styles.text}>{contact.infoText}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.socials}>
            <h3 className={styles.heading}>Socials</h3>
            <table className={styles.table}>
              <tbody>
                {socials.map((contact, ind) => (
                  <tr key={ind} className={styles.row}>
                    <td className={styles.icon}>{contact.icon}</td>
                    <td className={styles.text}>
                      <a className={styles.link} href="https://www.google.com">
                        {contact.infoText}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.locate}>
            <h3 className={styles.heading}>Locate Us</h3>
          </div>
        </div>
        <div className={styles.rights}>
          © 2017 All Rights Reserved. Designed & Developed by{" "}
          <a href="http://microbit-itsolutions.com/">
            Microbit IT Solutions LLC
          </a>
          .
        </div>
      </div>
    );
  }
}

export default Footer;
