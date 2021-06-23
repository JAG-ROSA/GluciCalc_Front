/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import React from "react";
import { Card } from "react-bootstrap";
import Image from "assets/images/no_product.png";

const SearchCardImage = ({ data }) => (
  (() => {
    if (data.selected_images !== undefined) {
      if (data.selected_images.front !== undefined) {
        if (data.selected_images.front.display.fr !== undefined) {
          return (<Card.Img variant="top" src={data.selected_images.front.display.fr} className="productImage search-card-img-top" alt="Image of the product" />);
        }
      }
    }
    return (<Card.Img variant="top" src={Image} className="productImage search-card-img-top" alt="Image of the product missing" />);
  })()
);

export default SearchCardImage;
