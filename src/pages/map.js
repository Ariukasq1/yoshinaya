import React from "react";
import { Container, Grid, Box } from "@mui/material";

const Map = () => {
	const mapFrame = "/images/mapFrame.svg";

	return (
		<Box sx={{ display: "flex" }}>
			<div className="content-section">
				<div className="tag">
					<p>Үүсэл хөгжил</p>
				</div>
				<h1>Yoshinoya олон улсад</h1>
				<p>
					YOSHINOYA олон улсын түргэн хоолны сүлжээ ресторан 12 гаруй оронд
					2,100 гаруй салбартайгаар үйл ажиллагаа явуулж байгаа бөгөөдМонгол улс
					Yoshinoya-н франчайз эрхийг авсан 13 дахь орон болсон
				</p>
			</div>
			<img src={mapFrame} alt="map" />
		</Box>
	);
};

export default Map;
