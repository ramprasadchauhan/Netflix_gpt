import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../slice/gptSlice";

const GptSearchBar = () => {
  //   const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef("");
  const langKey = useSelector((store) => store.config.lang);

  // search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async (movie) => {
    // Make an API call to get movie result
    const gptQuary = searchText.current.value;

    const tmdbResult = await searchMovieTMDB(gptQuary);
    console.log(tmdbResult);

    dispatch(addGptMovieResult(tmdbResult));
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
