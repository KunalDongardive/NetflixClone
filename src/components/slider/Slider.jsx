// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Featured from "../featured/Featured";

const Slider = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=ead99e79eed94c775cb53a37e2b0bd05&language=en-US&page=1"
        );
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const results = data.results;
  const first10 = results.slice(0, 10);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {first10.map((item) => (
          <SwiperSlide key={item.id}>
            <Featured item={item} backdrop={item.backdrop_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
