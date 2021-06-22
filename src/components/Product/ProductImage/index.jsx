import React from "react";
import { Card } from "react-bootstrap";
import Image from "assets/images/no_product.png";

const ProductImage = ({ data }) => {
  if (data.selected_images !== undefined) {
    if (data.selected_images.front !== undefined) {
      if (data.selected_images.front.display.fr !== undefined) {
        return (<Card.Img src={data.selected_images.front.display.fr} className="product-image img-fluid" alt="product-photos" />);
      }
    }
  }
  return (<Card.Img src={Image} className="product-image img-fluid" alt="missing-product" />);
};

export default ProductImage;
