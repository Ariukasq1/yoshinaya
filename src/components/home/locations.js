import React from "react";
import MyGoogleMap from "../map/MyGoogleMap";
import { Container, Grid } from "@mui/material";
import Slider from "react-slick";

import LocationItem from "../LocationItem";
const Locations = ({ handleBlockScrollUp, handleBlockScrollDown }) => {
  const handleOnMouseOver = () => {
    handleBlockScrollDown(true);
    handleBlockScrollUp(true);
  };
  const handleOnMouseOut = () => {
    if (typeof window !== undefined && window.innerWidth > 768) {
      handleBlockScrollDown(false);
      handleBlockScrollUp(false);
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };
  return (
    <Container>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        className="locations__grid"
      >
        <Grid
          item
          xs={12}
          md={6}
          onMouseEnter={handleOnMouseOver}
          onMouseLeave={handleOnMouseOut}
        >
          <div className="scroll-container scroll-chrome locations__scroll">
            <LocationItem />
            <LocationItem />
            <LocationItem />
          </div>
          <Slider className="locations__slider">
            <div className="locations__slider__item">
              <LocationItem />
            </div>
            <div>
              <LocationItem />
            </div>
            <div>
              <LocationItem />
            </div>
          </Slider>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="locations__map"
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          <MyGoogleMap />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Locations;
