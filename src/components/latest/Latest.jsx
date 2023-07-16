import React from "react";
import "./latest.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PosterLatest from "../posterLatest/PosterLatest";

const Latest = () => {
  return (
    <div className="latest">
      <div className="latestTitle">
        <h1>Latest</h1>
        <p>
          View all <ArrowCircleRightIcon className="icon" />
        </p>
      </div>
      <PosterLatest />
    </div>
  );
};

export default Latest;
