import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import Navbar from "./Components/Navbar/Navbar";

import React from "react";
import Body from "./Components/Body";
import Accueil from "./Components/Accueil/Accueil";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Body />
    </BrowserRouter>
  );
};

export default App;
