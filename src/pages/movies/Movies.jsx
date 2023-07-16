import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./movies.css";
import FolderIcon from "@mui/icons-material/Folder";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import PublicIcon from "@mui/icons-material/Public";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Poster from "../../components/poster/Poster";
import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=ead99e79eed94c775cb53a37e2b0bd05&language=en-US&page=${page}`
      )
      .then((Response) => {
        setMovies(Response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  const handlePageClick = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="movies">
      <Header />
      <div className="heading">
        <div className="title">
          <h1>Movies</h1>
        </div>
        <div className="buttons">
          <button>
            <FolderIcon />
            Genre All
          </button>
          <button>
            <FolderCopyIcon />
            Type Movie
          </button>
          <button>
            <PublicIcon />
            Country
          </button>
          <button>
            <CalendarMonthIcon />
            Year
          </button>
          <button>
            <AspectRatioIcon />
            Quality
          </button>
          <button>
            <SortIcon />
            Sort
          </button>{" "}
          <button>
            <FilterAltIcon />
            Filter
          </button>
        </div>
      </div>
      <Poster movie={movies} />
      <div className="pagesButtons">
        <button onClick={() => handlePageClick(page - 1)}>
          <ArrowBackIcon />
        </button>
        <button onClick={() => handlePageClick(1)}>1</button>
        <button onClick={() => handlePageClick(2)}>2</button>
        <button onClick={() => handlePageClick(3)}>3</button>
        <button onClick={() => handlePageClick(4)}>4</button>
        <button onClick={() => handlePageClick(5)}>5</button>
        <button onClick={() => handlePageClick(6)}>6</button>
        <button onClick={() => handlePageClick(page + 1)}>
          <ArrowForwardIcon />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
