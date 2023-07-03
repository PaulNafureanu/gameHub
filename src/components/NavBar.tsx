import { Stack } from "react-bootstrap";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import Toggle from "./Toggle";
import Logo from "./Logo";
import SearchField from "./SearchField";

interface Props {
  darkMode: boolean;
  onDarkModeToggle: () => void;
  onSubmit: (value: string) => void;
}

const NavBar = ({ darkMode, onDarkModeToggle, onSubmit }: Props) => {
  return (
    <Stack direction="horizontal" className="justify-content-between">
      <Logo />
      <SearchField onSubmit={onSubmit} />
      <Toggle
        value={darkMode}
        onTrue={<BsFillSunFill color="yellow" size="20px" />}
        onFalse={<BsFillMoonStarsFill />}
        onClick={onDarkModeToggle}
        label={darkMode ? "Light Mode" : "Dark Mode"}
      />
    </Stack>
  );
};

export default NavBar;
