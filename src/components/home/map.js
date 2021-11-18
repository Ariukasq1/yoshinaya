import React from "react";
import { Container, Grid } from "@mui/material";
import { getData } from "../../utils";

class Map extends React.Component {
  render() {
    const { cat, posts } = this.props;
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
          {posts && posts.length > 0 && (
            <Grid item xs={12} md={7} className="grid-map">
              <img
                src={
                  cat && cat.acf && cat.acf.image
                    ? cat.acf.image
                    : "/images/mapBackground.svg"
                }
                alt="map"
              />
              {posts.map((post) => (
                <img
                  key={post.id}
                  src={getData(post._embedded, "image")}
                  alt={post.title.rendered}
                  className={post.acf.class}
                  style={{
                    top: post.acf.top,
                    left: post.acf.left,
                    zIndex: post.acf.zIndex,
                  }}
                />
              ))}
            </Grid>
          )}
        </Grid>
      </Container>
    );
  }
}

export default Map;
