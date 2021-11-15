import React from "react";
import { Container, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

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
								<a
									href="https://www.facebook.com/YoshinoyaMongolia"
									target="_blank"
									rel="noopener noreferrer"
									className="facebook-link"
								>
									<FacebookRoundedIcon />
								</a>
								<a
									href="https://twitter.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="twitter-link"
								>
									<TwitterIcon />
								</a>
								<a
									href="https://www.instagram.com/Yoshinoyamongolia/?fbclid=IwAR3CEMk2gsst4Nwy3NuWDdUAKLIuTaljtOyHJlZxGQylPbesdFdGFwR3aqQ"
									target="_blank"
									rel="noopener noreferrer"
									className="instagram-link"
								>
									<div className="bg">
										<div className="inner">
											<InstagramIcon />
										</div>
									</div>
								</a>
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
