import React from "react";
import { Grid, Container } from "@mui/material";
import { getData } from "../../utils";

class Special extends React.Component {
	render() {
		const { cat, posts } = this.props;
		return (
			<Container className="relative h-100 flex align-center">
				<Grid container spacing={6} alignItems="center" justifyContent="center">
					<Grid item xs={12}>
						<div className="content-special">
							<div className="tag">
								<p className="no-margin">{cat.acf.tag}</p>
							</div>
							<div className="title">
								<h1 className="title-margin no-margin">{cat.name}</h1>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} md={7}>
						<div className="special-ramen">
							<div className="relative" align="center">
								<img src="/images/leaf.svg" alt="" className="shape-leaf" />
								<div className="section-shape relative">
									<img src="/images/Vector2.svg" alt="vector2" />
								</div>
								<div className="section-shape relative">
									<img src="/images/Vector1.svg" alt="vector2" />
								</div>
								<img src="/images/ramen-special.svg" alt="" />
								<img
									src="/images/tomato.svg"
									alt="shape-tomato"
									className="shape-tomato"
								/>
							</div>
						</div>
						<div
							className="icon-scroll-down"
							onClick={() => this.props.handleChange(6)}
						>
							<span>Scroll down</span>
							<img src="/images/arrow-down.gif" alt="arrow down" />
						</div>
					</Grid>
					<Grid item xs={12} md={5}>
						<div className="scroll-container scroll-chrome">
							{posts && posts.length > 0 && (
								<>
									{posts.map((post) => (
										<div className="scroll-item">
											<img src={getData(post._embedded, "image")} alt="like emoji" />
											<div className="title-with-text">
												<h4 className="no-margin">{post.title.rendered}</h4>
												<p
													dangerouslySetInnerHTML={{
														__html: post.content.rendered,
													}}
													className="text no-margin"
												/>
											</div>
										</div>
									))}
								</>
							)}
						</div>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default Special;
