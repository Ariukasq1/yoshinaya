import WPAPI from "wpapi";
import Config from "../config";
import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { Container } from "@mui/material";
import ReactPageScroller from "../components/react-page-scroller";
import About from "../components/home/about";
import Special from "../components/home/special";
import AppCover from "./app-cover";
import Map from "../components/home/map";
import Products from "../components/home/products";
import History from "../components/home/history";
import Revolution from "../components/home/revolution";
import Footer from "../components/layouts/footer";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Index = ({
	loading,
	about,
	history,
	historyCat,
	revolution,
	mapCat,
	featureCat,
	feature,
}) => {
	const [currentPage, setCurrentPage] = useState(null);
	const [blockScrollUp, setBlockScrollUp] = useState(false);

	useEffect(() => {
		if (typeof window !== undefined) {
			setBlockScrollUp(window.innerWidth < 768);
		}
	});

	const handlePageChange = (pageNumber) => {
		setCurrentPage(Number(pageNumber));
	};

	const handleBeforePageChange = (number) => {
		console.log(number);
	};

	return (
		<Layout loading={loading} title={"Yoshinaya"}>
			<ReactPageScroller
				pageOnChange={handlePageChange}
				onBeforePageScroll={handleBeforePageChange}
				customPageNumber={currentPage}
				renderAllPagesOnFirstRender={true}
				blockScrollUp={blockScrollUp}
				animationTimer={1300}
			>
				<div className="component center home-about" key="home-about">
					<div className="ellipse"></div>
					<Container>
						<About page={about} handleChange={handlePageChange} />
					</Container>
				</div>
				<div className="component center home-products" key="home-products">
					<div className="ellipse"></div>
					<div className="overflow-right component center">
						<Products handleChange={handlePageChange} />
					</div>
				</div>
				{revolution && (
					<div className="component center home-revolution">
						<div className="ellipse"></div>
						<Container>
							<Revolution page={revolution} handleChange={handlePageChange} />
						</Container>
					</div>
				)}

				{history && (
					<div className="component center history" key="home-history">
						<div className="ellipse"></div>
						<div className="overflow-right component center">
							<History
								cat={historyCat}
								posts={history}
								handleChange={handlePageChange}
							/>
						</div>
						<div className="section-shape-line">
							<img
								src="/images/Vector5.svg"
								alt="vector"
								className="section-shape-line"
							/>
							<img
								src="/images/Vector6.svg"
								alt="vector"
								className="section-shape-line"
							/>
						</div>
					</div>
				)}
				<div className="component center" key="home-map">
					<div className="ellipse"></div>
					<Map handleChange={handlePageChange} cat={mapCat} />
				</div>
				{feature && (
					<div className="component center" key="home-special">
						<div className="ellipse"></div>
						<Special
							handleChange={handlePageChange}
							cat={featureCat}
							posts={feature}
						/>
					</div>
				)}

				<div className="component center" key="home-AppCover">
					<div className="app-cover-footer h-100">
						<AppCover />
						<Footer handleChange={handlePageChange} />
					</div>
				</div>
			</ReactPageScroller>
		</Layout>
	);
};

Index.getInitialProps = async (ctx) => {
	const about = await wp
		.pages()
		.slug("about")
		.embed()
		.then((data) => {
			return data[0];
		});

	const revolution = await wp
		.pages()
		.slug("revolution")
		.embed()
		.then((data) => {
			return data[0];
		});

	const historyCat = await wp
		.categories()
		.slug("history")
		.embed()
		.then((data) => {
			return data[0];
		});
	const history = await wp
		.posts()
		.categories(historyCat.id)
		.embed()
		.perPage(100)
		.then((data) => {
			return data;
		});
	const mapCat = await wp
		.categories()
		.slug("map")
		.embed()
		.then((data) => {
			return data[0];
		});
	const featureCat = await wp
		.categories()
		.slug("feature")
		.embed()
		.then((data) => {
			return data[0];
		});
	const feature = await wp
		.posts()
		.categories(featureCat.id)
		.embed()
		.perPage(100)
		.then((data) => {
			return data;
		})
		.catch((err) => console.log(err));

	return {
		about,
		history,
		historyCat,
		revolution,
		mapCat,
		featureCat,
		feature,
	};
};

export default Index;
