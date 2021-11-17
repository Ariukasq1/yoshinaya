import React from "react";
import { ButtonBase, Grid } from "@mui/material";
import { getData } from "../utils";

class HistoryItem extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <Grid container spacing={2} className="history-item" key={post.id}>
        <Grid item>
          <ButtonBase xs={{ width: 128, height: 128 }}>
            <img
              alt={post.title.rendered}
              src={getData(post._embedded, "image")}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <h4 className="m-0 no-margin">{post.title.rendered}</h4>
            </Grid>
            <Grid item className="item-content">
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default HistoryItem;
