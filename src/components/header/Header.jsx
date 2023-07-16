import React from "react";
import "./header.css";
import { useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dropdownRef = useRef(null);
  // eslint-disable-next-line
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsShown(!isShown);
  };

  const handleLogout = () => {
    navigate("/signUp");
  };

  // const handleClick = () => {
  //   setIsShown(!isShown);
  //   // setIsShown(true);
  // };

  return (
    <div className={isScrolled ? "header header-scrolled" : "header"}>
      <div className="logo">
        <img src="./image/Netflix_logo.png" alt="" />
      </div>
      <div className="menu">
        <Link to="/" className="menuItem">
          Home
        </Link>
        <Link to="/movies" className="menuItem">
          Genre
        </Link>
        <Link to="/movies" className="menuItem">
          Country
        </Link>
        <Link to="/movies" className="menuItem">
          Movies
        </Link>
        <Link to="/tv" className="menuItem">
          TV-Series
        </Link>
      </div>
      <div className="searchBar">
        <input type="search" placeholder="Titles, peoples" />
        <SearchIcon className="icon" />
      </div>
      <div className="profile">
        <NotificationsActiveIcon className="icon" />
        <img src="./image/profile_img.png" alt="" />
        <ArrowDropDownIcon className="icon" onClick={handleClick} />
      </div>
      {isShown && (
        <div className="dropDown">
          <span>Settings</span>
          <span onClick={handleLogout}>Logout</span>
        </div>
      )}
    </div>
  );
};

export default Header;
