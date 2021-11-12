import React from "react";
import { AppBar, Toolbar, Button, Container, Grid } from "@mui/material";

const Menu = () => {
  const yoshinoyaLogo = "/images/YoshinoyaLogo.svg";
  const searchIcon = "/images/searchIcon.svg";
  return (
    <AppBar
      className="app-bar"
      style={{
        backgroundColor: "#ffff",
        boxShadow: "none",
      }}
    >
      <Container fixed>
        <Toolbar className="tool-bar">
          <img src={yoshinoyaLogo} alt="Yoshinoya logo" />
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Menu;
