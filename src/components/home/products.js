import React from "react";
import { Button, Grid } from "@mui/material";
import Slider from "react-slick";
import ProductItem from "../ProductItem";

class Products extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
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
            slidesToShow: 1.5,
          },
        },
      ],
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
            <img
              src="/images/arrow-down.gif"
              alt="arrow down"
            />
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
