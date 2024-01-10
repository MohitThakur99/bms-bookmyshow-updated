import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

// Layouts
import DefaultLayout from "./layouts/Default.layout";
import MovieLayout from "./layouts/Movie.layout";

// Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "174fcdf2676e75f9410ad0ed4ada4081";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout component={HomePage}/>} />
        <Route path="/movie/:id" element={<MovieLayout component={Movie}/>} />
        <Route path="/plays" element={<DefaultLayout component={Plays}/>} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
