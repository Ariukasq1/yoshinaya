import WPAPI from 'wpapi';
import React from 'react';
import Layout from "../components/layouts/Layout";
import Config from "../config";
import {Container, Grid, Box} from "@mui/material"

// const wp = new WPAPI({ endpoint: Config.apiUrl });

class Index extends React.Component {
  // static async getInitialProps() {
  //   let apiMethod = wp.categories();

  //   const mainTabCategory = await apiMethod
  //     .parent(21)
  //     .embed();

  //   return { mainTabCategory };
  // }

  render() {
    return (
      <Layout>
        <Grid container spacing={2} className="index">
          <Grid item xs={8}>
            <h1>xs=8</h1>
          </Grid>
          <Grid item xs={4}>
            <h1>xs=4</h1>
          </Grid>
          <Grid item xs={4}>
            <h1>xs=4</h1>
          </Grid>
          <Grid item xs={8}>
            <h1>xs=8</h1>
          </Grid>
        </Grid>
        <div className=""></div>
        <div className="relative">
          <h2>Gerege wordpress</h2>
          Hello template
          <h1>fnjanfd,dnmf,</h1>
        </div>
      </Layout >
    );
  }
}

export default Index;
