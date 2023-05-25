import { Component, ReactNode } from "react";
import styles from "./achievements-carousal.module.scss";
import {
  IAchievementCarousalProps,
  IAchievementCarousalStates,
} from "./achievements-carousal.constants";
import display_img1 from "./../../../images/display_img1.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
      image: display_img1,
      img_info: "display_img1",
    },
    {
      rank: "1st",
      comapny: "Electrical Trading Company",
      info: "in U.A.E to get ISO 9001:2008 Certification.",
      extraText: "23 Years of Excellence in Electrical Industrial Solutions",
      image: display_img1,
      img_info: "display_img1",
    },
    {
      rank: "1st",
      comapny: "Electrical Trading Company",
      info: "in U.A.E to get ISO 9001:2008 Certification.",
      extraText: "23 Years of Excellence in Electrical Industrial Solutions",
      image: display_img1,
      img_info: "display_img1",
    },
  ];
  constructor(props: IAchievementCarousalProps) {
    super(props);
    this.state = { currentSlide: 0 };
    this.buttonNext = this.buttonNext.bind(this);
    this.buttonPrev = this.buttonPrev.bind(this);
  }
  componentDidMount(): void {
    setInterval(() => {
      this.buttonNext();
    }, 6000);
  }
  buttonNext() {
    let box = document.getElementById("cont");
    if (box) {
      if (this.state.currentSlide === this.displaySliders.length - 1) {
        box.scrollLeft = 0;
        this.setState({ currentSlide: 0 });
      } else {
        box.scrollLeft = box.scrollLeft + box.clientWidth;
        this.setState({ currentSlide: this.state.currentSlide + 1 });
      }
    }
  }
  buttonPrev() {
    let box = document.getElementById("cont");
    if (box) {
      box.scrollLeft = box.scrollLeft - box.clientWidth;
      this.setState({ currentSlide: this.state.currentSlide - 1 });
    }
  }
  render(): ReactNode {
    return (
      <div className={styles.parent}>
        <button
          className={styles.btnPrev}
          onClick={this.buttonPrev}
          style={{
            pointerEvents: this.state.currentSlide ? "all" : "none",
            opacity: this.state.currentSlide ? 1 : 0.7,
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: "2rem" }} />
        </button>
        <button className={styles.btnNext} onClick={this.buttonNext}>
          <ArrowForwardIosIcon style={{ fontSize: "2rem" }} />
        </button>
        <div id="cont" className={styles.achievements}>
          {this.displaySliders.map((slider, index) => (
            <div key={index} className={styles.display}>
              <div className={styles.slider}>
                <div className={styles.displayHeading}>
                  <h1 className={styles.rank}>{slider.rank}</h1>
                  <h3 className={styles.company}>{slider.comapny}</h3>
                  <h4 className={styles.info}>{slider.info}</h4>
                  <h5 className={styles.extraText}>{slider.extraText}</h5>
                </div>
                <img
                  className={styles.displayImg}
                  src={slider.image}
                  alt={slider.img_info}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AchievementCarousal;
