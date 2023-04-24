import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API__KEY} from "../../API";
import MovieCard from "../../components/movieCard";




const TopRated = () => {
    const [topRated, setTopRated] = useState([])


    const getTopRated = (key) => {
          axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
              .then((res) => {
                  setTopRated(res.data.results)
              })
    }
    useEffect(() => {
        getTopRated(API__KEY)
    },[])
    console.log(topRated)
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        topRated.map((el) => (
                            <MovieCard el={el}/>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default TopRated;