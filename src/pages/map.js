import React from "react";
import { Grid, Box } from "@mui/material";

const Map = () => {
	const mapFrame = "/images/map.svg";

	return (
		<div className="component center" key="home-map">
			<Grid item xs={12} md={5}>
				<div className="content">
					<div className="tag">
						<p className="no-margin">Үүсэл хөгжил</p>
					</div>
					<h1 className="title title-margin">Yoshinoya олон улсад</h1>
					<p className="text">
						YOSHINOYA олон улсын түргэн хоолны сүлжээ ресторан 12 гаруй оронд
						2,100 гаруй салбартайгаар үйл ажиллагаа явуулж байгаа бөгөөд Монгол
						улс Yoshinoya-н франчайз эрхийг авсан 13 дахь орон болсон
					</p>
				</div>
			</Grid>
			<Grid item xs={12} md={7}>
				<img src={mapFrame} alt="map" />
			</Grid>
		</div>
	);
};

export default Map;
