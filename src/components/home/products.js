import React from "react";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import ProductItem from "../ProductItem";
import { PostAddSharp } from "@mui/icons-material";

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
    const { cat, posts } = this.props;
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4}>
          <div className="title">
            <div className="tag">{cat && cat.name}</div>
            <h1>{cat && cat.description}</h1>
            {/* <Button variant="outlined">Бүх хоол харах</Button> */}
          </div>
          <div
            className="icon-scroll-down"
            onClick={() => this.props.handleChange(2)}
          >
            <span>Scroll down</span>
            <img src="/images/arrow-down.gif" alt="arrow down" />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          {PostAddSharp && (
            <Slider {...settings}>
              {posts.map((post) => (
                <ProductItem post={post} key={post.id} />
              ))}
            </Slider>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default Products;
