import { Stack, Image } from "react-bootstrap";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import Toggle from "./Toggle";
import logo from "./../assets/logo.webp";

interface Props {
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

const NavBar = ({ darkMode, onDarkModeToggle }: Props) => {
  return (
    <Stack direction="horizontal" className="justify-content-between">
      <Image src={logo} height="48px" />
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
