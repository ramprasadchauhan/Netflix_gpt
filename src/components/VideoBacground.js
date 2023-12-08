import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBacground = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const distatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/901362/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

    console.log(trailer);
    distatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBacground;

// {
//   "id": 901362,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "'Trolls Band Together' with filmmakers | Academy Conversations",
//       "key": "wm0t8yvDTjE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-11-17T18:00:09.000Z",
//       "id": "655caea30816c70137ec1e7f"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "See *NSYNC as trolls",
//       "key": "TRkmq0MuGM0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-11-03T14:00:19.000Z",
//       "id": "6547af50d8cc4a011dc4585b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Music Celebration",
//       "key": "H1mv_0OpcwU",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-10-17T15:00:11.000Z",
//       "id": "652ea684358da75b5f7a9bf3"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "A Look Inside",
//       "key": "GsSVFetIgCo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-10-10T16:00:18.000Z",
//       "id": "65261ba5fd630000ffcd57d4"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Tiny\" 30s Kids Spot",
//       "key": "IC0xmmw26Pc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-09-21T08:55:33.000Z",
//       "id": "651816339b861600acaf510b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Rescue\" - 30s Kids Spot",
//       "key": "ec12DKIzueI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-09-21T08:54:26.000Z",
//       "id": "6518161c96e30b0100028ade"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Dream Cast\" 30s Kids Spot",
//       "key": "-EW2GWd3qeg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-09-21T08:53:06.000Z",
//       "id": "6518160c9b861600acaf5100"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Sing It\" 30s Kids Spot",
//       "key": "gkIOnBxVNGQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-09-21T08:50:27.000Z",
//       "id": "651815fdc50ad2010bfdabc0"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer 2",
//       "key": "ftUpFjGKuY0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-09-14T04:00:19.000Z",
//       "id": "650291e85545ca0138d2696e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "qZ40Z62tcXM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-03-28T15:00:08.000Z",
//       "id": "6423057b2dc9dc00bf5a2db1"
//     }
//   ]
// }
