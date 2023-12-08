import { BG_URL } from "../utils/constants";
import GptMovieSuggations from "./GptMovieSuggations";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div>
        <img className="absolute -z-10" src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggations />
    </div>
  );
};

export default GptSearchPage;
