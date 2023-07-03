import React from "react";
import { Card, Placeholder } from "react-bootstrap";
import placeholderImage from "./../assets/placeholder.webp";

const GameCardSkeleton = () => {
  return (
    <Card style={{ height: "22rem" }}>
      <Card
        style={{ height: "12rem" }}
        className="bg-body-secondary border-0"
      />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
};

export default GameCardSkeleton;
