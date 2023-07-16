import React from "react";
import "./signUp.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../../components/userContext/UserContext";
import { useContext } from "react";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { setUser } = useContext(UserContext);
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  // eslint-disable-next-line

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && emailRef.current === document.activeElement) {
        handleStart();
      }
    });
  }, []);

  const handleStart = () => {
    setEmail(emailRef.current.value);
    localStorage.setItem("email", emailRef.current.value);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    localStorage.setItem("password", passwordRef.current.value);
    navigate("/signIn");
    setUser(true);
  };

  return (
    <div className="signUp">
      <div className="header">
        <div className="logo">
          <img src="./image/Netflix_logo.png" alt="" className="logo" />
        </div>

        <div className="signInbuttons">
          <div className="langButton">
            <LanguageIcon />
            <p>English</p>
            <ArrowDropDownIcon />
          </div>
          <button
            className="signInButton"
            onClick={() => {
              navigate("/signIn");
            }}
          >
            SignIn
          </button>
        </div>
      </div>
      <div className="hero">
        <div className="backGroundImage">
          <img src="./image/backgroundimg.jpg" alt="" />
        </div>
        <div className="signUpContainer">
          <div className="scText">
            <h1>
              Unlimited movies, TV <br /> shows and more.
            </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
          </div>
          {!email ? (
            <div className="signUpForm">
              <input type="email" ref={emailRef} placeholder="Email address" />
              <button type="submit" onClick={handleStart}>
                Get Started
                <ArrowForwardIosIcon />
              </button>
            </div>
          ) : (
            <div className="signUpForm">
              <input
                type="password"
                ref={passwordRef}
                placeholder="Enter password"
              />
              <button type="submit" onClick={handleFinish}>
                Start
                <ArrowForwardIosIcon />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="promoLabel">
        <div className="promoText">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, <br /> Chromecast, Apple TV,
            Blu-ray players and <br /> more.
          </p>
        </div>
        <div className="promoImg">
          <img src="./image/promo_label_1.png" alt="" />
        </div>
      </div>
      <div className="promoLabelFliped">
        <div className="promoFlipImg">
          <img src="./image/promo_label_2.jpg" alt="" />
        </div>
        <div className="promoFlipText">
          <h1>
            Download your shows <br /> to watch offline.
          </h1>
          <p>
            Save your favourites easily and always have <br /> something to
            watch.
          </p>
        </div>
      </div>
      <div className="promoLabel">
        <div className="promoText">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on <br /> your phone, tablet,
            laptop, and TV.
          </p>
        </div>
        <div className="promoImg">
          <img src="./image/promo_label_3.png" alt="" />
        </div>
      </div>
      <div className="promoLabelFliped">
        <div className="promoFlipImg">
          <img src="./image/promo_label_4.png" alt="" />
        </div>
        <div className="promoFlipText">
          <h1>
            Create profiles for <br /> children.
          </h1>
          <p>
            Send children on adventures with their <br /> favourite characters
            in a space made just for <br /> them—free with your membership.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="footerItems">
          <div className="question">Questions? Call 000-800-919-1694</div>
          <div className="listofLinks">
            <ul className="links">
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>AccountPrivacy</li>
              <li>Speed Test</li>
            </ul>

            <ul className="links">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookies Prefrences</li>
              <li>Legal Notice</li>
            </ul>
            <ul className="links">
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
            <ul className="links">
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="langButton">
            <LanguageIcon />
            <p>English</p>
            <ArrowDropDownIcon />
          </div>
          <div className="footNote">Netflix Created By Kunal</div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
