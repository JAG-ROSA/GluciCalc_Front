import React from "react";
import { Card } from "react-bootstrap";

const HomeCard = ({ title, description, image }) => (
  <Card style={{ border: "none" }}>
    <Card.Body>
      {!!image && <Card.Img variant="top" src={image} />}
      <Card.Title className="text-center">{title}</Card.Title>
      <Card.Text className="text-center">{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default HomeCard;
