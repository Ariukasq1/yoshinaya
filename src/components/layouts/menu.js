import React from "react";
import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";

const Menu = () => {
	const image = "/images/YoshinoyaLogo.png";
	const searchIcon = "/images/searchIcon.png";
	return (
		<div className="container">
			<AppBar
				className="app-bar"
				style={{
					backgroundColor: "#ffff",
					boxShadow: "none",
				}}
			>
				<Toolbar className="tool-bar">
					<img src={image} alt="Yoshinoya logo" />
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
			</AppBar>
		</div>
	);
};

export default Menu;
