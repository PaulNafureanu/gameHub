import { Image, Stack } from "react-bootstrap";
import logo from "./../assets/logo.webp";

const Logo = () => {
  return (
    <Stack direction="horizontal" gap={3} className="align-items-center">
      <Image src={logo} height="64px" />
      <p className="h2">Game Hub</p>
    </Stack>
  );
};

export default Logo;
