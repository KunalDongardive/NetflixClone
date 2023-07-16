import React from "react";
import "./signIn.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/userContext/UserContext";
import { useContext } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail === email && storedPassword === password) {
      navigate("/");
      setUser(true);
    } else {
      navigate("/signUp");
    }
  };

  return (
    <div className="signIn">
      <div className="bgImg">
        <img src="./image/backgroundimg.jpg" alt="" />
      </div>
      <div className="logo">
        <img src="./image/Netflix_logo.png" alt="" />
      </div>
      <div className="signInCard">
        <h1>Sign In</h1>
        <div className="cardItem">
          <input
            type="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
        <div className="remember">
          <div className="checkbox">
            <input type="checkbox" checked />
            <p>Remember me</p>
          </div>
          <p>Need Help?</p>
        </div>
        <div className="newtoNetflix">
          <p>New to Netflix?</p>
          <span
            onClick={() => {
              navigate("/signUp");
            }}
            className="register"
          >
            Sign Up Now
          </span>
        </div>
        <div className="captchaNote">
          <p>
            This Page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span>Learn more</span>
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="footerItems">
          <div className="question">
            <p>Questions? Call 000-800-919-1694</p>
          </div>
          <div className="listofLinks">
            <ul className="links">
              <li>FAQ</li>
              <li>Help Center</li>
            </ul>
            <ul className="links">
              <li>Terms of Use</li>
              <li>Privacy</li>
            </ul>
            <ul>
              <li>Cookie Preferences</li>
            </ul>
            <ul>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="langButton">
            <LanguageIcon />
            <p>English</p>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
