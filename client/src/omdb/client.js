const API_KEY = process.env.OMDB_API_KEY;

export const Movies = {
  search: async movieTitle => {
    const r = await fetch(
      new Request(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieTitle}`)
    );
    if (r.status === 200) {
      const json = await r.json();
      if (json.Response === "True") {
        return json.Search;
      }

      throw new Error("Failed search!");
    }
    throw new Error("Failed request!");
  }
};
