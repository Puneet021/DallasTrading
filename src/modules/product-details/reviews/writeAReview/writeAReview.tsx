import { Component, ReactNode } from "react";
import styles from "./writeAReview.module.scss";
import {
  IwriteAReviewProps,
  IwriteAReviewStates,
} from "./writeAReview.constants";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

class WriteAReview extends Component<IwriteAReviewProps, IwriteAReviewStates> {
  constructor(props: IwriteAReviewProps) {
    super(props);
    this.state = {
      rating: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: SelectChangeEvent<typeof this.state.rating>) {
    this.setState({ rating: event.target.value });
  }
  render(): ReactNode {
    return (
      <div className={styles.writeAReviewContainer}>
        <h2 className={styles.heading2}>Write a Review</h2>
        <h2 className={styles.heading3}>
          Be the first to review “Industrial Plug & Socket”
        </h2>
        <p className={styles.info}>
          Your email address will not be published. Required fields are marked*
        </p>
        <div className={styles.reviewForm}>
          <TextField
            key={`text_${0}`}
            className={styles.textField}
            id="custom-css-outlined-input"
            fullWidth
            label="Name"
          />
          <TextField
            key={`text_${1}`}
            className={styles.textField}
            id="custom-css-outlined-input"
            fullWidth
            label="Email"
          />
          <TextField
            key={`text_${2}`}
            className={styles.textField}
            id="outlined-multiline-static"
            label="Write Your Review"
            fullWidth
            multiline
            rows={4}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-controlled-open-select-label">
              Select Rating
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={this.state.rating}
              label="Select Rating"
              onChange={this.handleChange}
            >
              <MenuItem key={`text_item_${1}`} value={1}>
                One
              </MenuItem>
              <MenuItem key={`text_item_${2}`} value={2}>
                Two
              </MenuItem>
              <MenuItem key={`text_item_${3}`} value={3}>
                Three
              </MenuItem>
              <MenuItem key={`text_item_${4}`} value={4}>
                Four
              </MenuItem>
              <MenuItem key={`text_item_${5}`} value={5}>
                Five
              </MenuItem>
            </Select>
          </FormControl>
          <button className={styles.submitBtn}>Submit</button>
        </div>
      </div>
    );
  }
}

export default WriteAReview;
