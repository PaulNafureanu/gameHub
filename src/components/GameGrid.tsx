import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();

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
