import React from "react";
import MyGoogleMap from "../map/MyGoogleMap";
import { Container, Grid } from "@mui/material";

const Locations = ({ handleBlockScrollUp, handleBlockScrollDown }) => {
  const handleOnMouseOver = () => {
    handleBlockScrollDown(true);
    handleBlockScrollUp(true);
  };
  const handleOnMouseOut = () => {
    handleBlockScrollDown(false);
    handleBlockScrollUp(false);
  };
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <div
            className="scroll-container scroll-chrome"
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}
          ></div>
        </Grid>
        <Grid item xs={12} md={6} className="locations__map__container">
          <div className="locations__map__inner">
            <MyGoogleMap />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Locations;
