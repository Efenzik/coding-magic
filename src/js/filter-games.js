export const filterByCatecories = (categories, games) => {
  const filteredGames = games.filter(game =>
    game.categories.includes(categories)
  );
  return filteredGames;
};
