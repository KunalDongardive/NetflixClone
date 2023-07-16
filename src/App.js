import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp//SignUp";
import SignIn from "./pages/signIn/SignIn";
import Home from "./pages/homePage/Home";
import Movies from "./pages/movies/Movies";
import TvSeries from "./pages/tvSeries/TvSeries";
import { UserContext } from "./components/userContext/UserContext";
import React, { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <SignUp />} />
        <Route path="/movies" element={user ? <Movies /> : <SignIn />} />
        <Route path="/tv" element={user ? <TvSeries /> : <SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
