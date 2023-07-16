import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ListIcon from "@mui/icons-material/List";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "./recommend.css";
import PosterRecomend from "../posterRecommend/PosterRecommend";

const Recommend = () => {
  return (
    <div className="recommend">
      <div className="recommendTitle">
        <h1>Recommended</h1>
        <button>
          <PlayCircleIcon className="icon" />
          Movies
        </button>
        <button className="tv">
          <ListIcon className="icon" /> TV Series
        </button>
        <button>
          <TrendingUpIcon className="icon" /> Trending
        </button>
      </div>
      <PosterRecomend />
    </div>
  );
};

export default Recommend;
