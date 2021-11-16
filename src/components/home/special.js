import React from "react";
import { Grid, Container } from "@mui/material";
import ReactPageScroller from "react-page-scroller";

class Special extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnMouseOver = () => {
    this.props.handleBlockScrollUp(true);
    this.props.handleBlockScrollDown(true);
  };
  handleOnMouseOut = () => {
    this.props.handleBlockScrollUp(false);
    this.props.handleBlockScrollDown(false);
  };
  render() {
    const likeEmoji = "/images/likeEmoji.svg";
    const scaryEmoji = "/images/scaryEmoji.svg";
    const saladEmoji = "/images/saladEmoji.svg";

    return (
      <Container className="relative h-100 flex valign-center">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <div className="content-special">
              <div className="tag">
                <p className="no-margin">Үүсэл хөгжил</p>
              </div>
              <div className="title">
                <h1 className="title-margin">YOSHINOYA-н онцлог</h1>
              </div>
            </div>
            <div className="special-ramen">
              <div className="relative" align="center">
                <img src="/images/leaf.svg" alt="" className="shape-leaf" />
                <div className="section-shape relative">
                  <img src="/images/Vector2.svg" alt="vector2" />
                </div>
                <div className="section-shape relative">
                  <img src="/images/Vector1.svg" alt="vector2" />
                </div>
                <img src="/images/ramen.png" alt="" />
                <img
                  src="/images/tomato.svg"
                  alt="shape-tomato"
                  className="shape-tomato"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div
              className="scroll-container scroll-chrome"
              onMouseOver={this.handleOnMouseOver}
              onMouseOut={this.handleOnMouseOut}
            >
              <div className="scroll-item">
                <img src={likeEmoji} alt="like emoji" />
                <div className="title-with-text">
                  <h4 className="no-margin">Үйлчилгээ</h4>
                  <p className="text no-margin">
                    1 – 2 bowl-г 60 секундэд, 3-с дээш bowl-г 3 минутанд багтаж
                    үйлчлэх ёстой.
                  </p>
                </div>
              </div>
              <div className="scroll-item">
                <img src={scaryEmoji} alt="scary emoji" />
                <div className="title-with-text">
                  <h4 className="no-margin">Өвөрмөц амт</h4>
                  <p className="text no-margin">
                    120 жилийн турш одоог хүртэл өөрчлөгдөөгүй, цорын ганц амт.
                  </p>
                </div>
              </div>
              <div className="scroll-item">
                <img src={saladEmoji} alt="salad emoji" />
                <div className="title-with-text">
                  <h4 className="no-margin">Эрүүл хоол</h4>
                  <p className="text no-margin">
                    Бусад түргэн хоолны сүлжээ рестораны хоолтой харьцуулахад
                    хуурч, шараагүйгээрээ
                  </p>
                </div>
              </div>
              <div className="scroll-item">
                <img src={saladEmoji} alt="salad emoji" />
                <div className="title-with-text">
                  <h4 className="no-margin">Эрүүл хоол</h4>
                  <p className="text no-margin">
                    Бусад түргэн хоолны сүлжээ рестораны хоолтой харьцуулахад
                    хуурч, шараагүйгээрээ
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div
          className="icon-scroll-down"
          onClick={() => this.props.handleChange(6)}
        >
          <span>Scroll down</span>
          <img
            src="/images/arrow-down.svg"
            alt="arrow down"
            className="up-down-anim"
          />
        </div>
      </Container>
    );
  }
}

export default Special;
