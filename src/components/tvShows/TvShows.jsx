import React from "react";
import PosterTvShows from "../posterTvShows/PosterTvShows";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./tvShows.css";

const TvShows = () => {
  return (
    <div className="tvShows">
      <div className="tvShowsTitle">
        <h1>TV Series</h1>
        <p>
          View all <ArrowCircleRightIcon className="icon" />
        </p>
      </div>
      <PosterTvShows />
    </div>
  );
};

export default TvShows;
