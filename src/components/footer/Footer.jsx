import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="logo">
          <img src="./image/Netflix_logo.png" alt="" />
        </div>
        <div className="footNote">
          <p>
            Netflix is top free streaming website website, where to watch movies
            online free without registration required. With a big database and
            great features, we're confident Netflix is the best free movies
            online website in the space that you can't simply miss!
          </p>
        </div>
        <div className="connectWithUs">
          <ul>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>Most Watched</li>
          <li>Top IMDB</li>
        </ul>
        <ul>
          <li>Action</li>
          <li>Horror</li>
          <li>Sci-Fi</li>
          <li>Thriller</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Request</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
