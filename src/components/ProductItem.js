import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

class ProductItem extends React.Component {
  render() {
    return (
      <Card className="product-item">
        <div className="loyalty">1000 Yoshi.P</div>
        <CardMedia
          component="img"
          height="140"
          image="/images/Gyudon.png"
          alt="green iguana"
        />
        <CardContent>
          <h4>Gyudon</h4>
          <div className="">
            Yoshinoya-н хамгийн алдартай хоол нь Gyudon ( 牛丼) (beef bowl) буюу
            Үхрийн махны боул юм.
          </div>
        </CardContent>
        <CardActions>
          <span className="price">Үнэ: 8900₮</span>
        </CardActions>
      </Card>
    );
  }
}

export default ProductItem;
