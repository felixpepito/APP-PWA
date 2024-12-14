import React from "react";

const AnimeDetailsModal = ({ anime, onClose }) => {
  const shortSynopsis =
    anime.synopsis?.length > 100
      ? anime.synopsis.substring(0, 100) + "..."
      : anime.synopsis;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-4 bg-white rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute text-2xl top-4 right-4"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={anime.images?.jpg?.image_url || "https://via.placeholder.com/150"}
          alt={anime.title}
          className="object-cover w-full h-48 rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">{anime.title}</h2>
        <p>
          <strong>Episodes:</strong> {anime.episodes || "Unknown"}
        </p>
        <p>
          <strong>Release Date:</strong> {anime.aired?.string || "Unknown"}
        </p>
        <p>
          <strong>Synopsis:</strong> {shortSynopsis}
        </p>
      </div>
    </div>
  );
};

export default AnimeDetailsModal;