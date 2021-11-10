import WPAPI from 'wpapi';
import React from 'react';
import Layout from "../components/layouts/Layout";
import Config from "../config";
import { Container, Grid, Box } from "@mui/material"

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
        <Container>
          <Grid container spacing={2}>              
     
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default Index;
