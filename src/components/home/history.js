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
      slidesToShow: 3,
      slidesToScroll: 1,
      padding: "1rem",
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
            onClick={() => this.props.handleChange(3)}
          >
            <span>Scroll down</span>
            <img src="/images/arrow-down.svg" alt="arrow down" />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default History;
