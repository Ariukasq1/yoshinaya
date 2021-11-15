import React, { useState } from "react";
import { AppBar, Toolbar, Button, Container, Grid } from "@mui/material";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";

const Menu = () => {
  const yoshinoyaLogo = "/images/YoshinoyaLogo.svg";
  const yoshiMobile = "/images/yoshi-icon.svg";
  const searchIcon = "/images/searchIcon.svg";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <AppBar
        className="app-bar"
        style={{
          backgroundColor: "#ffff",
          boxShadow: "none",
        }}
      >
        <Container fixed>
          <Toolbar className="tool-bar">
            <img
              src={yoshinoyaLogo}
              alt="Yoshinoya logo"
              className="tool-bar__image -desktop"
            />
            {/* <img
              src={yoshiMobile}
              alt="Yoshinoya logo"
              className="tool-bar__image -mobile"
            /> */}
            <div className="nav-links">
              <span>Нүүр хуудас</span>
              <span>Бидний тухай</span>
              <span>Хоолны цэс</span>
              <span>Хөнгөлөлт, урамшуулал</span>
              <span>Салбарууд</span>
              <img src={searchIcon} alt="Search Icon" className="search-icon" />
              <Button
                variant="contained"
                className="menu-btn"
                style={{ backgroundColor: "#FF7800" }}
              >
                Холбоо барих
              </Button>
            </div>
            <div
              className="tool-bar__menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseRounded /> : <MenuRounded />}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        open={isMenuOpen}
        anchor="right"
        onClose={() => setIsMenuOpen(false)}
      >
        <div className="menu-drawer">
          <img src="/images/ellipse-1.png" alt="" className="menu-drawer__e1" />
          <img src="/images/ellipse-2" alt="" className="menu-drawer__e2" />
        </div>
      </Drawer>
    </>
  );
};

export default Menu;
