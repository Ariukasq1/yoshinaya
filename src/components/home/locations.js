import React from "react";
import GoogleMap from "../map/GoogleMap";
import { Container, Grid } from "@mui/material";
import Slider from "react-slick";

import LocationItem from "../LocationItem";
const Locations = ({
  handleBlockScrollUp,
  handleBlockScrollDown,
  locations,
  cat,
}) => {
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

  const renderLocationItem = (item) => (
    <LocationItem
      key={item.id}
      address={item.acf.address}
      schedule={item.acf.schedule}
      image={item.acf.image.url}
      name={item.acf.name}
      phone={item.acf.phone}
      item={item}
    />
  );
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
          <div className="scroll-container scroll-chrome locations__scroll flex align-center">
            {locations &&
              locations.length > 0 &&
              locations.map((e) => renderLocationItem(e))}
          </div>
          {locations && locations.length > 0 && (
            <Slider className="locations__slider" settings={{ ...settings }}>
              <div>{locations.map((e) => renderLocationItem(e))}</div>
            </Slider>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="locations__map"
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          {locations && locations.length > 0 && (
            <div className="w-100 map index-map">
              <GoogleMap items={locations} />
            </div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Locations;
