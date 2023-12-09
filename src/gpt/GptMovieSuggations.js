import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const GptMovieSuggations = () => {
  const gpt = useSelector((store) => store.gpt);

  const { gptMovies } = gpt;
  if (!gptMovies) return null;

  return (
    <div>
      <div className="bg-black mt-8 pl-6 opacity-95">
        <div className="flex flex-wrap">
          {gptMovies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggations;
