import React from "react";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import HistoryItem from "../HistoryItem";

class History extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      delay: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      padding: "1rem",
      autoplay: true,
      speed: 500,
      centerMode: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 899,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <div className="title mb-2">
            <div className="tag">Үүсэл хөгжил</div>
            <h1>Түүхэн замнал</h1>
          </div>

          <Slider {...settings}>
            <div>
              <HistoryItem />
            </div>
            <div>
              <HistoryItem />
            </div>
            <div>
              <HistoryItem />
            </div>
            <div>
              <HistoryItem />
            </div>
            <div>
              <HistoryItem />
            </div>
          </Slider>
          <div
            className="icon-scroll-down"
            onClick={() => this.props.handleChange(4)}
          >
            <span>Scroll down</span>
            <img
              src="/images/arrow-down.gif"
              alt="arrow down"
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default History;
