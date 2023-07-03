import { Dropdown } from "react-bootstrap";

interface Props {
  selectedPlatform: string;
  onClick: (platform: { id: string; name: string }) => void;
}

const PlatformSelector = ({ selectedPlatform, onClick }: Props) => {
  const platforms = [
    {
      id: "",
      name: "All",
    },
    {
      id: "21",
      name: "Android",
    },
    {
      id: "3",
      name: "iOS",
    },
    {
      id: "4",
      name: "PC",
    },
    {
      id: "5",
      name: "Mac",
    },
    {
      id: "6",
      name: "Linux",
    },
    {
      id: "16,18,19,187",
      name: "Playstation",
    },
    {
      id: "1,14,80,186",
      name: "Xbox",
    },
    {
      id: "7",
      name: "Nintendo",
    },
    {
      id: "171",
      name: "Web",
    },
  ];

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary">
        {selectedPlatform === "All" ? "Platform" : selectedPlatform}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {platforms.map((platform) => (
          <Dropdown.Item key={platform.id} onClick={() => onClick(platform)}>
            {platform.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PlatformSelector;
