import { Stack } from "react-bootstrap";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { ReactNode } from "react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: ReactNode } = {
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    pc: <FaWindows />,
    mac: <FaApple />,
    linux: <FaLinux />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <SiNintendo />,
    web: <BsGlobe />,
  };

  const mapper = (slug: string) => {
    let iconKeys = Object.keys(iconMap);

    for (let index = 0; index < iconKeys.length; index++) {
      if (slug.includes(iconKeys[index])) {
        let node = iconMap[iconKeys[index]];
        delete iconMap[iconKeys[index]];
        return node;
      }
    }
  };

  return (
    <Stack direction="horizontal">
      {platforms.map(({ slug }) => (
        <span key={slug} style={{ paddingLeft: "4px" }}>
          {mapper(slug)}
        </span>
      ))}
    </Stack>
  );
};

export default PlatformIconList;
