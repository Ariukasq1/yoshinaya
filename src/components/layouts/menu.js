import React from "react";
// import logo from "../../assets/images/YoshinoyaLogo.png";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Menu = () => {
	const image = "/images/YoshinoyaLogo.png";
	const searchIcon = "/images/searchIcon.png";

	return (
		<AppBar className="app-bar" style={{ backgroundColor: "white" }}>
			<Toolbar className="tool-bar">
				<img src={image} alt="Yoshinoya logo" />
				<div className="nav-links">
					<span>Нүүр хуудас</span>
					<span>Бидний тухай</span>
					<span>Хоолны цэс</span>
					<span>Хөнгөлөлт, урамшуулал</span>
					<span>Салбарууд</span>
					<img src={searchIcon} alt="Search Icon" className="search-icon" />
					<Button variant="contained" style={{ backgroundColor: "#FF7800" }}>
						Холбоо барих
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Menu;
