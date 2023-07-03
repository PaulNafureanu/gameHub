import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchedGameResponse {
  count: number;
  results: Game[];
}

const API_KEY = "552e494de757490c8ba6050001be4b4c";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    axios
      .create({
        baseURL: "https://api.rawg.io/api",
        signal: controller.signal,
        params: { key: API_KEY },
      })
      .get<FetchedGameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  if (error) return <div>{error}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
};

export default GameGrid;
