import React from "react";
import Image from "assets/images/no_product.png";

const ProductImage = ({ data }) => {
  if (data.selected_images !== undefined) {
    if (data.selected_images.front !== undefined) {
      if (data.selected_images.front.display.fr !== undefined) {
        return (<img src={data.selected_images.front.display.fr} className="product-image" alt="product-photos" />);
      }
    }
  }
  return (<img src={Image} className="product-image" alt="missing-product" />);
};

export default ProductImage;
