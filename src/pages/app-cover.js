import React from "react";
import { Grid, Container } from "@mui/material";

const AppCover = () => {
  const appPhone = "/images/phones.svg";
  const playStore = "/images/playStore.svg";
  const appStore = "/images/appStore.svg";

  return (
    <Container className="appcover">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <div className="background-style">
          <Grid item xs={12} md={6} className="app-content">
            <h2>
              Та манай аппликейшиныг татсанаар олон онцгой боломжууд хүлээж
              байна.
            </h2>
            <div className="store-images">
              <img src={appStore} alt="app store" />
              <img src={playStore} alt="play store" />
            </div>
          </Grid>
          <Grid item sx={12} md={7}>
            <img
              src={appPhone}
              alt="application phone"
              className="app-cover-img"
            />
          </Grid>
        </div>
      </Grid>
    </Container>
  );
};

export default AppCover;
