import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import MovieDetails from "./pages/MovieDetails";
import ActorsDetails from "./pages/ActorsDetails";





function App() {
  return (
    <div className="App">
        <Header/>
         <Routes>
             <Route path={"/"} element={ <Home/>}/>
             <Route path={"/popular"} element={ <Popular/>}/>
             <Route path={"/topRated"} element={ <TopRated/>}/>
             <Route path={"/movie/details/:movieId"} element={ <MovieDetails/>}/>
             <Route path={"/actors/details"} element={ <ActorsDetails/>}/>
         </Routes>

        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
