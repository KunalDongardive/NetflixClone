import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Latest from "../../components/latest/Latest";
import Recommend from "../../components/recommend/Recommend";
import Slider from "../../components/slider/Slider";
import TvShows from "../../components/tvShows/TvShows";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Slider />
      <Recommend />
      <Latest />
      <TvShows />
      <Footer />
    </div>
  );
};

export default Home;
