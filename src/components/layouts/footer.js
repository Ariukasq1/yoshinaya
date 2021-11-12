import React from "react";
import { Container, Typography } from "@mui/material";
import {
	RiFacebookCircleLine,
	RiTwitterLine,
	RiInstagramLine,
} from "react-icons/ri";

const Footer = () => {
	const yoshinoyaLogo = "/images/YoshinoyaLogo.svg";

	return (
		<Container>
			<footer className="footer-container">
				<img src={yoshinoyaLogo} alt="Yoshinoya logo" />
				<div className="content">
					<Typography>Good, Easy, Fast</Typography>
					<div className="address-container">
						<Typography className="address" color="black">
							Монгол улс, Улаанбаатар, Сүхбаатар дүүрэг - 14240, 1-р хороо, 5-р
							хороолол, Чингисийн өргөн чөлөө, Бизнес Тауэр, 16 давхар
						</Typography>
						<div className="left-side">
							<div className="icons">
								<Typography color="#616E7C">Follow us:</Typography>
								<a href="https://www.facebook.com/YoshinoyaMongolia/" target="_blank">
									<RiFacebookCircleLine size="1.8em" />
								</a>
								<RiTwitterLine size="1.8em" />
								<RiInstagramLine size="1.8em" />
							</div>
							<Typography color="black">
								Зохиогчийн эрхээр хамгаалагдсан 2021 он
							</Typography>
						</div>
					</div>
				</div>
			</footer>
		</Container>
	);
};

export default Footer;
