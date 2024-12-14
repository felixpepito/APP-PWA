import React from "react";

const AnimeCard = ({ anime, onClick }) => {
  return (
    <div
      className="relative flex flex-col items-center p-4 transition-all duration-300 bg-orange-600 rounded-lg shadow-md hover:shadow-lg group hover:ring-4 hover:ring-orange-400"
      onClick={onClick}
    >
      <img
        src={anime.images?.jpg?.image_url || "https://via.placeholder.com/150"}
        alt={anime.title}
        className="object-cover w-full h-48 rounded-md"
        loading="lazy"
      />
      <h3 className="mt-2 text-lg font-semibold text-center text-white">
        {anime.title}
      </h3>
      <p className="mt-1 text-sm text-center text-white">
        Episodes: {anime.episodes || "Unknown"}
      </p>
      <p className="mt-1 text-sm text-center text-white">
        Release Date: {anime.aired?.string || "Unknown"}
      </p>
    </div>
  );
};

export default AnimeCard;