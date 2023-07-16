import React from "react";
import "./featured.css";
import StarIcon from "@mui/icons-material/Star";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Featured = (item, backdrop) => {
  return (
    <div className="featured">
      <div className="slider">
        <img src={`https://image.tmdb.org/t/p/w1280/${backdrop}`} alt="" />
      </div>
      <div className="metaInfo">
        <div className="title">{item.original_title}</div>
        <div className="genre">
          <div className="quality">4K</div>
          <div className="rating">
            <StarIcon />
            {item.vote_average}
          </div>
          <div className="duration">180 min</div>
          <div className="genre1">SciFi</div>
          <div className="genre2">Drama</div>
          <div className="genre3">Action</div>
        </div>
        <div className="summary">
          <p>{item.overview}</p>
        </div>
        <div className="buttons">
          <button>
            <ArrowRightIcon />
            Watch Now
          </button>
          <button className="addtoList">
            <FavoriteBorderIcon />
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
