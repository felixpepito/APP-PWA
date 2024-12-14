import React from "react";
import AnimeCard from "./AnimeCard";

const AnimeList = ({ animes, onAnimeClick }) => {
  return (
    <div className="px-4 py-8 bg-orange-100">
      <h2 className="mb-6 text-3xl font-semibold text-center text-orange-700">
        Pick your favorite anime
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {animes.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
            onClick={() => onAnimeClick(anime)}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;