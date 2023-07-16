import React from "react";
import "./posterTvShows.css";
import useAxios from "axios-hooks";

const PosterTvShows = () => {
  const [{ data, loading, error }] = useAxios(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=ead99e79eed94c775cb53a37e2b0bd05&language=en-US&page=1"
  );
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const results = data.results;

  return (
    <div className="posterTvShows">
      <div className="posterSlot">
        {results.map((movie) => (
          <div key={movie.id} className="poster">
            <div className="posterImg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                height={"300px"}
                width={"250px"}
              />
            </div>
            <div className="hd">HD</div>
            <div className="title">{movie.original_name}</div>
            <div className="metaInfo">
              <div className="year">{movie.first_air_date.slice(0, 4)}</div>
              <div className="dot">
                <p>.</p>
              </div>
              <div className="duration">100 min</div>
              <div className="type">
                <p>Movie</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PosterTvShows;
