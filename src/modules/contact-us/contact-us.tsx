import { Component, ReactNode } from "react";
import styles from "./contact-us.module.scss";
import { IContactUsProps, IContactUsStates } from "./contact-us.constants";
import ShadowHeading from "../../components/common/headings/shadowHeading/shadowHeading";
import BreadCrumb from "../../components/common/breadCrumb/breadCrumb";
import { Select, MenuItem, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

class ContactUs extends Component<IContactUsProps, IContactUsStates> {
  constructor(props: IContactUsProps) {
    super(props);
    this.state = {
      selectVal: 1,
      name: "",
      email: "",
      phone: "",
      message: "",
      answer: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  handleSubmit() {}
  render(): ReactNode {
    return (
      <div className={styles.contactUsContainer}>
        <BreadCrumb
          items={[
            { moduleName: "Home", link: "/home" },
            { moduleName: "Contact Us", link: "" },
          ]}
        />
        <ShadowHeading
          headingText1="Contact"
          headingText2="Us"
          backShadowHeading={false}
        />
        <div className={styles.contactDetailsCont}>
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <Select
              className={styles.selectBox}
              value={this.state.selectVal}
              fullWidth
              onChange={(e) => this.setState({ selectVal: +e.target.value })}
            >
              <MenuItem key={`text_item_${1}`} value={1}>
                Dubai
              </MenuItem>
              <MenuItem key={`text_item_${2}`} value={2}>
                Qatar (Doha Office)
              </MenuItem>
              <MenuItem key={`text_item_${3}`} value={3}>
                Qatar (Doha Showroom)
              </MenuItem>
              <MenuItem key={`text_item_${4}`} value={4}>
                Oman (Muscat Office)
              </MenuItem>
            </Select>
            <div className={styles.table}>
              <div className={styles.trow}>
                <LocationOnIcon className={styles.tdIcon} />
                <p className={styles.tdText}>
                  Office No 1004, Sobha Ivory II, Business Bay P.O. Box 2028,
                  Dubai
                </p>
              </div>
              <div className={styles.trow}>
                <LocalPhoneIcon className={styles.tdIcon} />
                <p className={styles.tdText}>+971 4 363 5500</p>
              </div>
              <div className={styles.trow}>
                <MailOutlineIcon className={styles.tdIcon} />
                <p className={styles.tdText}>info@dallastrading.net</p>
              </div>
            </div>
            <iframe
              title="dubai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.705946243937!2d55.26928987627525!3d25.17940497772232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6834914eab65%3A0x46526b1478fdeae0!2sSobha%20Ivory%201%20-%2032a%20Marasi%20Dr%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1685506013799!5m2!1sen!2sin"
              className={styles.gMap}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.sendAMessage}>
            <h2 className={styles.heading}>Send us a message</h2>

            <div className={styles.reviewForm}>
              <h4 className={styles.text1}>
                For general enquiries please contact us using the form below:
              </h4>
              <TextField
                key={`text_${0}`}
                className={styles.textField}
                id="custom-css-outlined-input"
                type="text"
                fullWidth
                value={this.state.name}
                label="Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <TextField
                key={`text_${1}`}
                className={styles.textField}
                id="custom-css-outlined-input"
                type="email"
                fullWidth
                label="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <TextField
                key={`text_${2}`}
                className={styles.textField}
                id="custom-css-outlined-input"
                type="tel"
                fullWidth
                label="Phone"
                value={this.state.phone}
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
              <TextField
                key={`text_${3}`}
                className={styles.textField}
                id="outlined-multiline-static"
                label="Message"
                type="text"
                fullWidth
                multiline
                rows={4}
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
              />
              <h4 className={styles.text1} style={{ marginTop: "0.5em" }}>
                Just to prove you are a human, please solve the equation: 23 -
                14 = ?
              </h4>
              <TextField
                key={`text_${4}`}
                className={styles.textField}
                id="custom-css-outlined-input"
                type="number"
                fullWidth
                label="Your answer"
                value={this.state.answer}
                onChange={(e) =>
                  this.setState({
                    answer: +e.target.value,
                  })
                }
              />
              <button className={styles.submitBtn} onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
