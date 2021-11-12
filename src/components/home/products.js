import React from "react";
import { Button, Grid } from "@mui/material";
import Slider from "react-slick";
import ProductItem from "../ProductItem";

class Products extends React.Component {
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
        <Grid item xs={12} md={4}>
          <div className="title">
            <div className="tag">Бүтээгдэхүүн</div>
            <h1>Хамгийн сайн амт чанарыг санал болгоно</h1>
            <Button variant="outlined">Бүх хоол харах</Button>
          </div>
          <div
            className="icon-scroll-down"
            onClick={() => this.props.handleChange(2)}
          >
            <span>Scroll down</span>
            <img src="/images/arrow-down.svg" alt="arrow down" />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Slider {...settings}>
            <div>
              <ProductItem />
            </div>
            <div>
              <ProductItem />
            </div>
            <div>
              <ProductItem />
            </div>
            <div>
              <ProductItem />
            </div>
            <div>
              <ProductItem />
            </div>
          </Slider>
        </Grid>
      </Grid>
    );
  }
}

export default Products;
