import React from "react";
import { Grid, Container } from "@mui/material";
import { getData } from "../../utils";

class Special extends React.Component {
  constructor(props) {
    super(props);
  }
  renderPostItem(post) {
    return (
      <div className="scroll-item" key={post.id}>
        <img src={getData(post._embedded, "image")} alt="like emoji" />
        <div className="title-with-text">
          <h4 className="no-margin">{post.title.rendered}</h4>
          <div
            className="text no-margin"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </div>
    );
  }
  handleOnMouseOver = () => {
    this.props.handleBlockScrollDown(true);
    this.props.handleBlockScrollUp(true);
  };
  handleOnMouseOut = () => {
    if (typeof window !== undefined && window.innerWidth > 768) {
      this.props.handleBlockScrollDown(false);
      this.props.handleBlockScrollUp(false);
    }
  };

  render() {
    const { cat, posts } = this.props;
    return (
      <Container className="relative flex h-100 align-center">
        <div
          className="icon-scroll-down"
          onClick={() => this.props.handleChange(6)}
        >
          <span>Scroll down</span>
          <img src="/images/arrow-down.gif" alt="arrow down" />
        </div>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={7}>
            <div className="content-special">
              <div className="tag">
                <p className="no-margin">{cat && cat.acf && cat.acf.tag}</p>
              </div>
              <div className="title">
                <h1 className="title-margin no-margin">{cat && cat.name}</h1>
              </div>
            </div>
            <div className="special-ramen">
              <div className="relative" align="center">
                <img src="/images/leaf.svg" alt="" className="shape-leaf" />
                <div className="section-shape relative">
                  <img src="/images/Vector2.svg" alt="vector2" />
                </div>
                <div className="section-shape relative">
                  <img src="/images/Vector1.svg" alt="vector2" />
                </div>
                <img
                  src={
                    cat && cat.acf && cat.acf.image
                      ? cat.acf.image
                      : "/images/ramen-special.svg"
                  }
                  alt=""
                />
                <img
                  src="/images/tomato.svg"
                  alt="shape-tomato"
                  className="shape-tomato"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div
              className="scroll-container scroll-chrome"
              onMouseLeave={this.handleOnMouseOut}
              onMouseEnter={this.handleOnMouseOver}
            >
              {posts.map((post) => this.renderPostItem(post))}
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Special;
