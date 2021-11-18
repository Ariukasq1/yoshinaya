import React from "react";
import { Box, Button, Fade, Grid, Modal } from "@mui/material";
import { getData } from "../../utils";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { handleChange, page } = this.props;
    const { showModal } = this.state;
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={5}>
          <div>
            <div className="title">
              <h1>{page.title.rendered}</h1>
              <p className="orange">Good, Easy, Fast</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />

            <Button
              onClick={this.handleModal}
              variant="text"
              className="video-btn"
            >
              <img src="/images/play-btn.svg" alt="play" />
              Танилцуулга үзэх
            </Button>
            <Modal
              open={showModal}
              onClose={this.handleModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              closeAfterTransition
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={showModal}>
                <Box>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        page.acf &&
                        page.acf.youtube_video &&
                        page.acf.youtube_video,
                    }}
                  />
                </Box>
              </Fade>
            </Modal>
          </div>
          <div className="icon-scroll-down" onClick={() => handleChange(1)}>
            <span>Scroll down</span>
            <img src="/images/arrow-down.gif" alt="arrow down" />
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div className="relative" align="center">
            <img src="/images/leaf.svg" alt="" className="shape-leaf" />
            <div className="section-shape">
              <img src="/images/Vector2.svg" alt="vector2" />
            </div>
            <img
              src={getData(page._embedded, "image")}
              alt={page.title.rendered}
            />
            <img
              src="/images/tomato.svg"
              alt="shape-tomato"
              className="shape-tomato"
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default About;
