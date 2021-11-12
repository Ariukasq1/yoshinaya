import React from "react";
import { Grid, Box } from "@mui/material";

const AppCover = () => {
	const appPhone = "/images/phones.png";
	const playStore = "/images/playStore.svg";
	const appStore = "/images/appStore.svg";

	return (
		<div className="background-style">
			<Grid item xs={12} md={5}>
				<h3>
					Та манай аппликейшиныг татсанаар олон онцгой боломжууд хүлээж байна.
				</h3>
				<div className="store-images">
					<img src={appStore} alt="app store" />
					<img src={playStore} alt="play store" />
				</div>
			</Grid>
			<Grid item sx={12} md={7} className="flow">
				<img src={appPhone} alt="application phone" className="app-cover-img" />
			</Grid>
		</div>
	);
};

export default AppCover;
