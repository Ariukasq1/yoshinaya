import React from "react";
import { Container, Grid } from "@mui/material";

class Map extends React.Component {
  render() {
    const { cat } = this.props;
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
          <Grid item xs={12} md={7}>
            <img src="/images/map.svg" alt="map" />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Map;
