import { Component, ReactNode } from "react";
import styles from "./achievements-carousal.module.scss";
import {
  IAchievementCarousalProps,
  IAchievementCarousalStates,
} from "./achievements-carousal.constants";
import display_img1 from "./../../../images/display_img1.jpg";
import display_img2 from "./../../../images/display_img2.png";
import display_img3 from "./../../../images/display_img3.png";
import img1 from "./../../../images/display4.jpg";
import img2 from "./../../../images/display2.jpg";
import img3 from "./../../../images/display3.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DisplaySlider from "./display-slider/display-slider";

class AchievementCarousal extends Component<
  IAchievementCarousalProps,
  IAchievementCarousalStates
> {
  displaySliders = [
    {
      rank: "1st",
      comapny: "Electrical Trading Company",
      info: "in U.A.E to get ISO 9001:2008 Certification.",
      extraText: "23 Years of Excellence in Electrical Industrial Solutions",
      image: img1,
      img_info: "display_img1",
    },
    {
      rank: "23",
      comapny: "High caliber",
      info: "techno-commercial professionals.",
      extraText: "23 Years of Excellence in Electrical Industrial Solutions",
      image: img2,
      img_info: "display_img2",
    },
    {
      rank: "1st",
      comapny: "Electrical Trading Company",
      info: "in U.A.E to get ISO 9001:2008 Certification.",
      extraText: "23 Years of Excellence in Electrical Industrial Solutions",
      image: img3,
      img_info: "display_img3",
    },
  ];
  constructor(props: IAchievementCarousalProps) {
    super(props);
    this.state = { currentSlide: 0, waitAgain: false };
    this.buttonNext = this.buttonNext.bind(this);
    this.buttonPrev = this.buttonPrev.bind(this);
    this.handleClickOnDot = this.handleClickOnDot.bind(this);
  }
  componentDidMount(): void {
    setInterval(() => {
      if (!this.state.waitAgain) {
        this.buttonNext();
      } else {
        this.setState({ waitAgain: false });
      }
    }, 8000);
  }
  buttonNext() {
    if (this.state.currentSlide === this.displaySliders.length - 1) {
      this.setState({ currentSlide: 0 });
    } else {
      this.setState({ currentSlide: this.state.currentSlide + 1 });
    }
  }
  buttonPrev() {
    if (this.state.currentSlide === 0) {
      this.setState({ currentSlide: this.displaySliders.length - 1 });
      return;
    }
    this.setState({ currentSlide: this.state.currentSlide - 1 });
  }
  handleClickOnDot(index: number) {
    this.setState({ currentSlide: index, waitAgain: true });
  }
  render(): ReactNode {
    return (
      <div className={styles.parent}>
        <button
          className={styles.btnPrev}
          onClick={() => {
            this.setState({ waitAgain: true });
            this.buttonPrev();
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: "2rem" }} />
        </button>
        <button
          className={styles.btnNext}
          onClick={() => {
            this.setState({ waitAgain: true });
            this.buttonNext();
          }}
        >
          <ArrowForwardIosIcon
            style={{
              fontSize: "2rem",
              color: this.state.currentSlide === 1 ? "rgba(0, 0, 0, 0.5)" : "",
            }}
          />
        </button>
        <div id="cont" className={styles.achievements}>
          {this.displaySliders.map((slider, index) => (
            <DisplaySlider
              key={index}
              slider={slider}
              isActive={this.state.currentSlide === index}
            />
          ))}
        </div>
        <div className={styles.carouselDots}>
          {this.displaySliders.map((d, i) =>
            this.state.currentSlide === i ? (
              <div key={i} className={styles.highlightedDot}></div>
            ) : (
              <div
                key={i}
                className={styles.dot}
                onClick={() => this.handleClickOnDot(i)}
              ></div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default AchievementCarousal;
