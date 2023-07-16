import React from "react";
import "./posterRecommend.css";
import useAxios from "axios-hooks";

const PosterRecommend = () => {
  const [{ data, loading, error }] = useAxios(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=ead99e79eed94c775cb53a37e2b0bd05&language=en-US&page=1"
  );
  // console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const results = data.results;

  return (
    <div className="posterRecommend">
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
            <div className="title">{movie.original_title}</div>
            <div className="metaInfo">
              <div className="year">{movie.release_date.slice(0, 4)}</div>
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

export default PosterRecommend;
