export const filterByCatecories = (category, games) => {
  const filteredGames = games.filter(game => game.category.includes(category));
  return filteredGames;
};
