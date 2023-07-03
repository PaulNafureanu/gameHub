import React, { useRef } from "react";
import { Form } from "react-bootstrap";

interface Props {
  onSubmit: (value: string) => void;
}

const SearchField = ({ onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Form
      className="w-100"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) onSubmit(ref.current.value);
      }}
      onChange={() => {
        if (ref.current?.value === "") onSubmit(ref.current.value);
      }}
    >
      <Form.Control ref={ref} type="text" placeholder="Search here..." />
    </Form>
  );
};

export default SearchField;
