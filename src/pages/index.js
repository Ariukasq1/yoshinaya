import WPAPI from "wpapi";
import React from "react";
// import Slider from "react-slick";
import Layout from "../components/layouts/Layout";
import Config from "../config";
import { Box, Button, Container, Fade, Grid, Modal } from "@mui/material";
import ReactPageScroller from "../components/react-page-scroller";
import Slider from "react-slick";
import Map from "./map";
import Special from "./special";
import AppCover from "./app-cover";
import ProductItem from "../components/ProductItem";

// const wp = new WPAPI({ endpoint: Config.apiUrl });

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentPage: null, showModal: false };
	}

	// static async getInitialProps() {
	//   let apiMethod = wp.categories();

	//   const mainTabCategory = await apiMethod
	//     .parent(21)
	//     .embed();

	//   return { mainTabCategory };
	// }
	handleModal = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	paginationClicked = (event) => {
		this.setState({ currentPage: Number(event.target.name) });
	};

	handlePageChange = (pageNumber) => {
		this.setState({ currentPage: pageNumber });
	};

	handleBeforePageChange = (number) => {
		console.log(number);
	};

	render() {
		const { loading } = this.props;
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			padding: "1rem",
		};

		return (
			<Layout loading={loading} title={"Yoshinaya"}>
				<ReactPageScroller
					pageOnChange={this.handlePageChange}
					onBeforePageScroll={this.handleBeforePageChange}
					customPageNumber={this.state.currentPage}
					renderAllPagesOnFirstRender={true}
				>
					<div className="component center home-about" key="home-about">
						<Container>
							<Grid
								container
								spacing={2}
								alignItems="center"
								justifyContent="center"
							>
								<Grid item xs={12} md={5}>
									<div className="">
										<div className="title">
											<h1>Yoshinoya-н Товч танилцуулга</h1>
											<p className="orange">Good, Easy, Fast</p>
										</div>
										<p>
											Yoshinoya-н үүсэл хөгжил нь тэртээх 1899 (A&W – 1919,
											White Castle – 1921, MacDonald – 1940, KFC – 1952, Burger
											King – 1953) онд буюу одоогоос 122 жилийн өмнө Япон улс,
											Токио хотын хөл хөд өлгөөн ихтэй Нихонбаши загасны захаас
											эхэлсэн.
										</p>
										<Button
											onClick={this.handleModal}
											variant="text"
											className="video-btn"
										>
											<img src="/images/play-btn.svg" alt="play" />
											Танилцуулга үзэх
										</Button>
										<Modal
											open={this.state.showModal}
											onClose={this.handleModal}
											aria-labelledby="modal-modal-title"
											aria-describedby="modal-modal-description"
											closeAfterTransition
											BackdropProps={{
												timeout: 500,
											}}
										>
											<Fade in={this.state.showModal}>
												<Box>
													<iframe
														width="939"
														height="528"
														src="https://www.youtube.com/embed/xgKJgwOPZ8I"
														title="YouTube video player"
														frameborder="0"
														allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
														allowfullscreen
													></iframe>
												</Box>
											</Fade>
										</Modal>
									</div>
									<div
										className="icon-scroll-down"
										onClick={() => this.handlePageChange(1)}
									>
										<span>Scroll down</span>
										<img src="/images/arrow-down.svg" alt="arrow down" />
									</div>
								</Grid>
								<Grid item xs={12} md={7}>
									<div className="relative" align="center">
										<img src="/images/leaf.svg" alt="" className="shape-leaf" />
										<div className="section-shape">
											<img src="/images/Vector2.svg" alt="vector2" />
										</div>
										<img src="/images/ramen.png" alt="" />
										<img
											src="/images/tomato.svg"
											alt="shape-tomato"
											className="shape-tomato"
										/>
									</div>
								</Grid>
							</Grid>
						</Container>
					</div>
					<div className="component center home-products" key="home-products">
						<div className="ellipse"></div>
						<Container>
							<Grid
								container
								spacing={2}
								alignItems="center"
								justifyContent="center"
							>
								<Grid item xs={12} md={4}>
									<div className="title">
										<div className="tag">Бүтээгдэхүүн</div>
										<h1>Хамгийн сайн амт чанарыг санал болгоно</h1>
										<Button variant="outlined">Бүх хоол харах</Button>
									</div>
									<div
										className="icon-scroll-down"
										onClick={() => this.handlePageChange(2)}
									>
										<span>Scroll down</span>
										<img src="/images/arrow-down.svg" alt="arrow down" />
									</div>
								</Grid>
								<Grid item xs={12} md={8}>
									<Slider {...settings}>
										<div>
											<ProductItem />
										</div>
										<div>
											<ProductItem />
										</div>
										<div>
											<ProductItem />
										</div>
										<div>
											<ProductItem />
										</div>
										<div>
											<ProductItem />
										</div>
									</Slider>
								</Grid>
							</Grid>
						</Container>
					</div>
					<div className="component center" key="home-map">
						<div className="ellipse"></div>
						<Map />
						<div
							className="icon-scroll-down"
							onClick={() => this.handlePageChange(3)}
						>
							<span>Scroll down</span>
							<img src="/images/arrow-down.svg" alt="arrow down" />
						</div>
					</div>
					<div className="component center" key="home-special">
						<div className="ellipse"></div>
						<Special />
						<div
							className="icon-scroll-down"
							onClick={() => this.handlePageChange(4)}
						>
							<span>Scroll down</span>
							<img src="/images/arrow-down.svg" alt="arrow down" />
						</div>
					</div>
					<div className="component center" key="home-AppCover">
						<AppCover />
					</div>
				</ReactPageScroller>
			</Layout>
		);
	}
}

export default Index;
