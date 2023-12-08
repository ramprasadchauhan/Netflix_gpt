import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to r from-black">
      <h1 className="text-4xl font-bold">{title} </h1>
      <p className="py-6 text-lg w-1/4">{overview} </p>
      <div className="">
        <button className="bg-white text-black px-4 py-2 rounded-lg mr-4 text-2xl hover:opacity-80">
          ▶Play
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-4 text-2xl bg-opacity-50 hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
