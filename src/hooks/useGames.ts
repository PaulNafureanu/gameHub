import useData from "./useData";

interface Game {
  id: number;
  name: string;
}

const useGames = () => useData<Game[]>("/games");

export default useGames;
