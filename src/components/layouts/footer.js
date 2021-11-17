import React from "react";
import { Container, Typography } from "@mui/material";

class Footer extends React.Component {
	render() {
		return (
			<Container className="footer-container">
				<footer>
					<img src="/images/YoshinoyaLogo.svg" alt="Yoshinoya logo" />
					<div className="content">
						<Typography>Good, Easy, Fast</Typography>
						<div className="address-container">
							<Typography className="address" color="black">
								Монгол улс, Улаанбаатар, Сүхбаатар дүүрэг - 14240, 1-р хороо,
								5-р хороолол, Чингисийн өргөн чөлөө, Бизнес Тауэр, 16 давхар
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
										<img src="/images/facebook.svg" alt="facebook" />
									</a>
									<a
										href="https://twitter.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="twitter-link"
									>
										<img src="/images/twitter.svg" alt="twitter" />
									</a>
									<a
										href="https://www.instagram.com/Yoshinoyamongolia/?fbclid=IwAR3CEMk2gsst4Nwy3NuWDdUAKLIuTaljtOyHJlZxGQylPbesdFdGFwR3aqQ"
										target="_blank"
										rel="noopener noreferrer"
										className="instagram-link"
									>
										<div className="bg">
											<div className="inner">
												<img src="/images/instagram.svg" alt="instagram" />
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
				<div
					className="icon-scroll-down"
					onClick={() => this.props.handleChange(0)}
				>
					<span>Эхлэх</span>
					<div className="rotate">
						<img src="/images/arrow-up.gif" alt="arrow up" />
					</div>
				</div>
			</Container>
		);
	}
}

export default Footer;
