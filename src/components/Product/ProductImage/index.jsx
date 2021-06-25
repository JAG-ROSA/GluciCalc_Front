import React from "react";
import Image from "assets/images/no_product.png";

const ProductImage = ({ data }) => {
  if (data.selected_images !== undefined) {
    if (data.selected_images.front !== undefined) {
      if (data.selected_images.front.display.fr !== undefined) {
        return (<img src={data.selected_images.front.display.fr} alt="product-photos" className="product-img" />);
      }
    }
  }
  return (<img src={Image} alt="missing-product" className="product-img" />);
};

export default ProductImage;
