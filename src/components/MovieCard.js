import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 m-3 hover:scale-105">
      <img src={IMG_CDN_URL + posterPath} alt="Movie" />
    </div>
  );
};

export default MovieCard;
