import React, { useState, useRef } from "react";
import {
  AppBar,
  Drawer,
  Toolbar,
  Button,
  Container,
  InputBase,
  IconButton,
} from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  styled,
  alpha,
} from "@mui/material/styles";
import { MenuRounded, CloseRounded } from "@mui/icons-material";

const Menu = () => {
  const yoshinoyaLogo = "/images/YoshinoyaLogo.svg";
  const searchIcon = "/images/searchIcon.svg";

  const searchRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
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
            <div className="tool-bar__menu" onClick={() => setIsMenuOpen(true)}>
              <MenuRounded />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        open={isMenuOpen}
        anchor="right"
        onClose={() => setIsMenuOpen(false)}
        className="menu-drawer"
      >
        <div className="menu-drawer__inner">
          <img src="/images/ellipse-1.png" alt="" className="menu-drawer__e1" />
          <img src="/images/ellipse-2.png" alt="" className="menu-drawer__e2" />

          <div className="menu-drawer__menu">
            <div className="menu-drawer__search__container">
              <div className="menu-drawer__search" ref={searchRef}>
                <div className="menu-drawer__search__icon">
                  <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="search-icon"
                  />
                </div>
                <InputBase
                  placeholder="Хайх..."
                  inputProps={{ "aria-label": "search" }}
                  onFocus={() => searchRef.current.classList.add("-focus")}
                  onBlur={() => searchRef.current.classList.remove("-focus")}
                  className="menu-drawer__search__input"
                />
              </div>
            </div>
            <div className="menu-drawer__menu__item">Нүүр хуудас</div>
            <div className="menu-drawer__menu__item">Бидний тухай</div>
            <div className="menu-drawer__menu__item">Хоолны цэс</div>
            <div className="menu-drawer__menu__item">Хөнгөлөлт, урамшуулал</div>
            <div className="menu-drawer__menu__item">Салбарууд</div>
            <IconButton
              aria-label="upload picture"
              component="span"
              className="menu-drawer__close-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              <CloseRounded />
            </IconButton>
          </div>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: `#FF7800`,
    },
    secondary: {
      main: "#FF7800",
    },
  },
});
export default Menu;
