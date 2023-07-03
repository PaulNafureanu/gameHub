import React from "react";
import { Dropdown } from "react-bootstrap";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

interface Props {
  selectedOrder: string;
  onClick: (order: string) => void;
}

const OrderingSelector = ({ selectedOrder, onClick }: Props) => {
  let prepSelectedOrder = selectedOrder.includes("-")
    ? selectedOrder.slice(1)
    : selectedOrder;

  prepSelectedOrder =
    prepSelectedOrder.charAt(0).toUpperCase() + prepSelectedOrder.slice(1);

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
      <Dropdown.Toggle variant="secondary">
        {prepSelectedOrder.toLowerCase().includes("none") || !prepSelectedOrder
          ? "Ordering"
          : prepSelectedOrder}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {ordering.map((order) => (
          <Dropdown.Item
            key={order}
            onClick={() => onClick(order === "none" ? "" : order)}
            className="d-flex justify-content-between align-items-center"
          >
            {order.charAt(0).toUpperCase() + order.slice(1)}
            {selectedOrder.includes(order) &&
              (selectedOrder.includes("-") ? (
                <AiFillCaretDown />
              ) : (
                <AiFillCaretUp />
              ))}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default OrderingSelector;
