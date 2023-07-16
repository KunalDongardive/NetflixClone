import React from "react";
import { useState } from "react";
import "./posterTV.css";

const PosterTV = (movie) => {
  // eslint-disable-next-line
  const [videoKey, setVideoKey] = useState(null);
  const handlePosterClick = async (tv_id) => {
    const videoData = await axios.get(
      `https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=ead99e79eed94c775cb53a37e2b0bd05&language=en-US`
    );
    // console.log(videoData.data);
    const key = videoData.data.results[0].key;
    setVideoKey(key);
    window.open("https://www.youtube.com/watch?v=" + key);
  };

  return (
    <div className="posterTVTemplate">
      <div className="posterSlot">
        {movie.map((movie) => (
          <div
            key={movie.id}
            className="poster"
            onClick={() => handlePosterClick(movie.id)}
          >
            <div className="posterImg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                height={"300px"}
                width={"250px"}
              />
            </div>
            <div className="hd">HD</div>
            <div className="title">{movie.name}</div>
            <div className="metaInfo">
              <div className="year">{movie.first_air_date.slice(0, 4)}</div>
              <div className="dot">
                <p>.</p>
              </div>
              <div className="duration">100 min</div>
              <div className="type">TV Shows</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PosterTV;
