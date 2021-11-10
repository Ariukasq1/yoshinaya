import WPAPI from 'wpapi';
import React from 'react';
import Layout from "../components/layouts/Layout";
import Config from "../config";
import { Container, Grid, Box } from "@mui/material"
import ReactPageScroller from "../components/react-page-scroller";


// const wp = new WPAPI({ endpoint: Config.apiUrl });

class Index extends React.Component {  constructor(props) {
  super(props);
  this.state = { currentPage: null };
}

  // static async getInitialProps() {
  //   let apiMethod = wp.categories();

  //   const mainTabCategory = await apiMethod
  //     .parent(21)
  //     .embed();

  //   return { mainTabCategory };
  // }


  paginationClicked = (event) => {
    this.setState({ currentPage: Number(event.target.name) });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleBeforePageChange = (number) => {
    console.log(number);
  };

  
  render() {
    const { loading } = this.props;

    return (  
      <Layout loading={loading} title={"Yoshinaya"}>
        <Container>
          <Grid container spacing={2}>              
          <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
          renderAllPagesOnFirstRender={true}
        >
          <div className="component center" key="home-about">
          <Grid item xs={12} md={5}>
    <div className="">
      <h1>Yoshinoya-н Товч танилцуулга</h1>
      <p className>Good, Easy, Fast</p>
      <p>Yoshinoya-н үүсэл хөгжил нь тэртээх 1899 (A&W – 1919, White Castle – 1921, 
        MacDonald – 1940, KFC – 1952, Burger King – 1953) онд буюу одоогоос 122 жилийн өмнө Япон улс, Токио хотын хөл хөдөлгөөн ихтэй Нихонбаши загасны захаас эхэлсэн.</p>
    </div>
  </Grid>
  <Grid item xs={12} md={7}>
  <div className="">
    
    </div>
  </Grid>
            <div className='icon-scroll' onClick={() => this.handlePageChange(1)}></div>
          </div>
          <div className="component center" key="home-products">
            <h1>jfdjdhdhdhfj</h1>
            <div className='icon-scroll' onClick={() => this.handlePageChange(2)}></div>
          </div>

        </ReactPageScroller>


          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default Index;
