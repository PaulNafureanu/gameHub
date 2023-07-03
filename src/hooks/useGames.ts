import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  rating: number;
  metacritic: number;
}

const useGames = (gameQuery?: GameQuery) =>
  useData<Game[]>(
    "/games",
    {
      params: {
        search: gameQuery?.search,
        platforms: gameQuery?.platforms?.id,
        genres: gameQuery?.genres?.id,
        ordering: gameQuery?.ordering,
      },
    },
    gameQuery ? [gameQuery] : []
  );

export default useGames;
