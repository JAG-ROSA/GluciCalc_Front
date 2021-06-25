import React from "react";
import { Card } from "react-bootstrap";

const HomeCard = ({
  title, description, description2, image,
}) => (
  <Card className="card-home m-1">
    <Card.Body>
      {!!image && <Card.Img variant="top" src={image} />}
      <h4 className="my-text-quaternary text-center">{title}</h4>
      <p className="fs-6 text-center">
        {description}
        <br />
        {description2}
      </p>
    </Card.Body>
  </Card>
);

export default HomeCard;
