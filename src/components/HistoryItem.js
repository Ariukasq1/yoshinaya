import React from "react";
import { ButtonBase, Grid, Typography } from "@mui/material";

class HistoryItem extends React.Component {
  render() {
    return (
      <Grid container spacing={2} className="history-item">
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <img alt="complex" src="/images/history.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <h4 className="m-0 no-margin">1899 он</h4>
            </Grid>
            <Grid item className="item-content">
              <p>
                1899 онд Токио хотын Нихонбаши загасны зах дээр байгуулагдсан.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default HistoryItem;
