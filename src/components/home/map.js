import React from "react";
import { Container, Grid } from "@mui/material";

class Map extends React.Component {
  render() {

    return (
      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <div className="content">
              <div className="tag">
                <p className="no-margin">Үүсэл хөгжил</p>
              </div>
              <div className="title">
                <h1 className="title-margin">Yoshinoya олон улсад</h1>
              </div>
              <p className="text">
                YOSHINOYA олон улсын түргэн хоолны сүлжээ ресторан 12 гаруй
                оронд 2,100 гаруй салбартайгаар үйл ажиллагаа явуулж байгаа
                бөгөөд Монгол улс Yoshinoya-н франчайз эрхийг авсан 13 дахь орон
                болсон
              </p>
            </div>
            <div
              className="icon-scroll-down"
              onClick={() => this.props.handleChange(5)}
            >
              <span>Scroll down</span>
              <img
                src="/images/arrow-down.gif"
                alt="arrow down"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <img src="/images/map.svg" alt="map" />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Map;
