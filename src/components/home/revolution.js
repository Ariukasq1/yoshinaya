import React from "react";
import { Grid } from "@mui/material";
import { getData } from "../../utils";

class Revolution extends React.Component {
  render() {
    const { page } = this.props;

    return (
      <Grid container spacing={2} alignItems="flex-end" justifyContent="center">
        <Grid item xs={5}>
          <div className="title mb-2">
            {page.acf && page.acf.tag && (
              <div className="tag">{page.acf.tag}</div>
            )}
            <h1>{page.title.rendered}</h1>
          </div>
        </Grid>
        <Grid item xs={7}>
          <img className="img" src={getData(page._embedded, "image")} alt="" />
        </Grid>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />

          <div
            className="icon-scroll-down"
            onClick={() => this.props.handleChange(3)}
          >
            <span>Scroll down</span>
            <img
              src="/images/arrow-down.gif"
              alt="arrow down"
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Revolution;
