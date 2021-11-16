import WPAPI from "wpapi";
import Config from "../config";
import React from "react";
import Layout from "../components/layouts/Layout";
import { Box, Button, Container, Fade, Grid, Modal } from "@mui/material";
import ReactPageScroller from "../components/react-page-scroller";
import Special from "../components/home/special";
import AppCover from "./app-cover";
import Map from "../components/home/map";
import Products from "../components/home/products";
import History from "../components/home/history";
import Revolution from "../components/home/revolution";
import Footer from "../components/layouts/footer";
// const wp = new WPAPI({ endpoint: Config.apiUrl });

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null, showModal: false, blockScrollUp: false };
  }

  // static async getInitialProps() {
  //   let apiMethod = wp.categories();

  // static async getInitialProps() {
  //   let apiMethod = wp.categories();

  //   return { mainTabCategory };
  // }

  componentDidMount = () => {
    if (typeof window !== undefined) {
      this.setState({ blockScrollUp: window.innerWidth < 768 });
    }
  };

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

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
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
          renderAllPagesOnFirstRender={true}
          blockScrollUp={this.state.blockScrollUp}
        >
          <div className="component center home-about" key="home-about">
            <div className="ellipse"></div>
            <Container>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} md={5}>
                  <div>
                    <div className="title">
                      <h1>Yoshinoya-н Товч танилцуулга</h1>
                      <p className="orange">Good, Easy, Fast</p>
                    </div>
                    <p>
                      Yoshinoya-н үүсэл хөгжил нь тэртээх 1899 (A&W – 1919,
                      White Castle – 1921, MacDonald – 1940, KFC – 1952, Burger
                      King – 1953) онд буюу одоогоос 122 жилийн өмнө Япон улс,
                      Токио хотын хөл хөд өлгөөн ихтэй Нихонбаши загасны захаас
                      эхэлсэн.
                    </p>
                    <Button
                      onClick={this.handleModal}
                      variant="text"
                      className="video-btn"
                    >
                      <img src="/images/play-btn.svg" alt="play" />
                      Танилцуулга үзэх
                    </Button>
                    <Modal
                      open={this.state.showModal}
                      onClose={this.handleModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      closeAfterTransition
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={this.state.showModal}>
                        <Box>
                          <iframe
                            width="939"
                            height="528"
                            src="https://www.youtube.com/embed/xgKJgwOPZ8I"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </Box>
                      </Fade>
                    </Modal>
                  </div>
                  <div
                    className="icon-scroll-down"
                    onClick={() => this.handlePageChange(1)}
                  >
                    <span>Scroll down</span>
                    <img src="/images/arrow-down.svg" alt="arrow down" />
                  </div>
                </Grid>
                <Grid item xs={12} md={7}>
                  <div className="relative" align="center">
                    <img src="/images/leaf.svg" alt="" className="shape-leaf" />
                    <div className="section-shape">
                      <img src="/images/Vector2.svg" alt="vector2" />
                    </div>
                    <img src="/images/ramen.png" alt="" />
                    <img
                      src="/images/tomato.svg"
                      alt="shape-tomato"
                      className="shape-tomato"
                    />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className="component center home-products" key="home-products">
            <div className="ellipse"></div>
            <div className="overflow-right component center">
              <Products handleChange={this.handlePageChange} />
            </div>
          </div>
          <div className="component center home-revolution">
            <div className="ellipse"></div>
            <Container>
              <Revolution handleChange={this.handlePageChange} />
            </Container>
          </div>
          <div className="component center history" key="home-history">
            <div className="ellipse"></div>
            <div className="overflow-right component center">
              <History handleChange={this.handlePageChange} />
            </div>
            <div className="section-shape-line">
              <img
                src="/images/Vector5.svg"
                alt="vector"
                className="section-shape-line"
              />
              <img
                src="/images/Vector6.svg"
                alt="vector"
                className="section-shape-line"
              />
            </div>
          </div>
          <div className="component center" key="home-map">
            <div className="ellipse"></div>
            <Map handleChange={this.handlePageChange} />
          </div>
          <div className="component center" key="home-special">
            <div className="ellipse"></div>
            <Special handleChange={this.handlePageChange} />
          </div>
          <div className="component center" key="home-AppCover">
            {/* <div className="app-cover-footer"> */}
            <div className="appcover__container">
              <AppCover />
              <Footer />
            </div>
            {/* </div> */}
          </div>
        </ReactPageScroller>
      </Layout>
    );
  }
}

export default Index;
