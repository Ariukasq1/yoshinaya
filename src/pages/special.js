import React from "react";
import { Grid, Container } from "@mui/material";

const Special = () => {
	const ramen = "/images/ramen.png";
	const likeEmoji = "/images/likeEmoji.svg";
	const scaryEmoji = "/images/scaryEmoji.svg";
	const saladEmoji = "/images/saladEmoji.svg";

	return (
		<div className="component center" key="home-special">
			<div className="ellipse"></div>
			<Container>
				<Grid item xs={12} md={6}>
					<div className="content-special">
						<div className="tag">
							<p className="no-margin">Үүсэл хөгжил</p>
						</div>
						<div className="title">
							<h1 className="title-margin">YOSHINOYA-н онцлог</h1>
						</div>
						<img src={ramen} alt="ramen" />
					</div>
				</Grid>
				<Grid item xs={12} md={5}>
					<div className="scroll-container">
						<div className="scroll-item">
							<img src={likeEmoji} alt="like emoji" />
							<div className="title-with-text">
								<h3>Үйлчилгээ</h3>
								<p className="text no-margin">
									1 – 2 bowl-г 60 секундэд, 3-с дээш bowl-г 3 минутанд багтаж
									үйлчлэх ёстой.
								</p>
							</div>
						</div>
						<div className="scroll-item">
							<img src={scaryEmoji} alt="scary emoji" />
							<div className="title-with-text">
								<h3>Өвөрмөц амт</h3>
								<p className="text no-margin">
									120 жилийн турш одоог хүртэл өөрчлөгдөөгүй, цорын ганц амт.
								</p>
							</div>
						</div>
						<div className="scroll-item">
							<img src={saladEmoji} alt="salad emoji" />
							<div className="title-with-text">
								<h3>Эрүүл хоол</h3>
								<p className="text no-margin">
									Бусад түргэн хоолны сүлжээ рестораны хоолтой харьцуулахад
									хуурч, шараагүйгээрээ
								</p>
							</div>
						</div>
						<div className="scroll-item">
							<img src={saladEmoji} alt="salad emoji" />
							<div className="title-with-text">
								<h3>Эрүүл хоол</h3>
								<p className="text no-margin">
									Бусад түргэн хоолны сүлжээ рестораны хоолтой харьцуулахад
									хуурч, шараагүйгээрээ
								</p>
							</div>
						</div>
					</div>
				</Grid>
			</Container>
		</div>
	);
};

export default Special;
