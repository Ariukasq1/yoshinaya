import React from "react";
import { Container, Typography } from "@mui/material";

class Footer extends React.Component {
  render() {
    const { page } = this.props;
    return (
      <Container className="footer-container">
        <footer>
          <img src="/images/YoshinoyaLogo.svg" alt="Yoshinoya logo" />
          <div className="content">
            <Typography>{page.acf && page.acf.tag}</Typography>
            <div className="address-container">
              {page && (
                <div
                  className="address"
                  dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                />
              )}

              <div className="left-side">
                <div className="icons">
                  <p className="no-margin">Follow us:</p>
                  <a
                    href={page.acf && page.acf.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook-link"
                  >
                    <img src="/images/facebook.svg" alt="facebook" />
                  </a>
                  <a
                    href={page.acf && page.acf.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter-link"
                  >
                    <img src="/images/twitter.svg" alt="twitter" />
                  </a>
                  <a
                    href={page.acf && page.acf.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <div className="bg">
                      <div className="inner">
                        <img src="/images/instagram.svg" alt="instagram" />
                      </div>
                    </div>
                  </a>
                </div>
                <Typography color="black">
                  Зохиогчийн эрхээр хамгаалагдсан 2021 он
                </Typography>
              </div>
            </div>
          </div>
        </footer>
        <div
          className="icon-scroll-down icon-scroll-up"
          onClick={() => this.props.handleChange(0)}
        >
          <span>Эхлэх</span>
          <div className="rotate">
            <img src="/images/arrow-up.gif" alt="arrow up" className="" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Footer;
