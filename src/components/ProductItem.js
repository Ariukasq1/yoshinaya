import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { getData } from "../utils";

class ProductItem extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <Card className="product-item zoom-in" key={post.id}>
        {/* <div className="loyalty">1000 Yoshi.P</div> */}
        <CardMedia
          component="img"
          height="140"
          image={getData(post._embedded, "image")}
          alt={post.title.rendered}
        />
        <CardContent>
          <h4>{post.title.rendered}</h4>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </CardContent>
        <CardActions>
          <span className="price">
            Үнэ: {(post.acf && post.acf.price) || "0"}₮
          </span>
        </CardActions>
      </Card>
    );
  }
}

export default ProductItem;
