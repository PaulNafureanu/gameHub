import { Dropdown } from "react-bootstrap";

interface Props {
  onClick: (platform: string) => void;
}

const PlatformSelector = ({ onClick }: Props) => {
  const platforms = [
    "all",
    "android",
    "ios",
    "pc",
    "mac",
    "linux",
    "playstation",
    "xbox",
    "nintendo",
    "web",
  ];

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary">Platforms</Dropdown.Toggle>
      <Dropdown.Menu>
        {platforms.map((platform) => (
          <Dropdown.Item key={platform} onClick={() => onClick(platform)}>
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PlatformSelector;
