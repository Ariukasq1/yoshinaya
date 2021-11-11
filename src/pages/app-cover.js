import React from "react";
import { Grid, Box } from "@mui/material";

const AppCover = () => {
	const applicationCover = "/images/applicationCover.svg";

	return (
		<div className="component center" key="home-app-cover">
			<Grid item xs={12} md={12}>
				<img src={applicationCover} alt="application cover" />
			</Grid>
		</div>
	);
};

export default AppCover;
