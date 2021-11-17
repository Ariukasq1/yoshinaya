import React from "react";
import { Container, Grid } from "@mui/material";

class Map extends React.Component {
  render() {
    const { cat, posts } = this.props;
    console.log(posts, "posts");
    return (
      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <div className="content">
              <div className="tag">
                <p className="no-margin">{cat && cat.acf && cat.acf.tag}</p>
              </div>
              <div className="title">
                <h1 className="title-margin">{cat && cat.name}</h1>
              </div>
              <p className="text">{cat && cat.description}</p>
            </div>
            <div
              className="icon-scroll-down"
              onClick={() => this.props.handleChange(5)}
            >
              <span>Scroll down</span>
              <img src="/images/arrow-down.gif" alt="arrow down" />
            </div>
          </Grid>
          <Grid item xs={12} md={7} className="grid-map">
            <img src="/images/map.svg" alt="map" />
            <img
              src="/images/location1.svg"
              alt=""
              className="location1"
              style={{}}
            />
            <img src="/images/location2.svg" alt="" className="pin" />
            <img src="/images/location3.svg" alt="" className="location3" />
            <img src="/images/location4.svg" alt="" className="location4" />
            <img src="/images/location5.svg" alt="" className="location5" />
            <img src="/images/locationCan.svg" alt="" className="locationCan" />
            <img src="/images/locationCN.svg" alt="" className="locationCN" />
            <img src="/images/locationEN.svg" alt="" className="locationEN" />
            <img src="/images/locationJP2.svg" alt="" className="locationJP" />
            <img src="/images/locationJP2.svg" alt="" className="locationJP2" />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Map;
