import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import Navbar from "./Components/Navbar/Navbar";

import Body from "./Components/Body";
import UploadWidget from "./Components/Apploder/Apploder";

const App = () => {

  
   
 

  return (
    <BrowserRouter>
      <Navbar/>
      <Body />
      
      
    </BrowserRouter>
  );
};

export default App;
