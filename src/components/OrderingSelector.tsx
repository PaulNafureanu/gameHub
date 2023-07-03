import React from "react";
import { Dropdown } from "react-bootstrap";

interface Props {
  onClick: (order: string) => void;
}

const OrderingSelector = ({ onClick }: Props) => {
  const ordering = [
    "none",
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
    "metacritic",
  ];

  return (
    <Dropdown className="ms-3">
      <Dropdown.Toggle variant="secondary">Ordering</Dropdown.Toggle>
      <Dropdown.Menu>
        {ordering.map((order) => (
          <Dropdown.Item
            key={order}
            onClick={() => onClick(order === "none" ? "" : order)}
          >
            {order.charAt(0).toUpperCase() + order.slice(1)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default OrderingSelector;
