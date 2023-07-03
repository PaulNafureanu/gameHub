import { Stack, ToggleButton } from "react-bootstrap";

interface Props {
  label?: string;
  value: boolean;
  onTrue: any;
  onFalse: any;
  onClick: () => void;
}

const Toggle = ({ value, onTrue, onFalse, onClick, label }: Props) => {
  return (
    <ToggleButton
      className="border-0 bg-transparent"
      type="checkbox"
      checked={value}
      variant="outline-dark"
      value=""
      onClick={onClick}
    >
      <Stack
        direction="horizontal"
        gap={1}
        className="align-items-center text-nowrap ms-1"
      >
        {value ? onTrue : onFalse}
        {label}
      </Stack>
    </ToggleButton>
  );
};

export default Toggle;
