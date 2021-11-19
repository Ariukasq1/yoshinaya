import React from "react";
import { Grid, Container } from "@mui/material";

const AppCover = () => {
  return (
    <Container style={{ paddingLeft: 40 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        className="background-style"
      >
        <Grid item xs={12} md={7} className="app-content">
          <React.Fragment>
            <h2 className="mr-3">
              Та манай аппликейшиныг татсанаар олон онцгой боломжууд хүлээж
              байна.
            </h2>
            <div className="store-images">
              <img src="/images/appStore.svg" alt="app store" />
              <img src="/images/playStore.svg" alt="play store" />
            </div>
          </React.Fragment>
        </Grid>
        <Grid item sx={12} md={5} className="phone-image">
          <img
            src="/images/phones.svg"
            alt="application phone"
            className="app-cover-img"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppCover;
